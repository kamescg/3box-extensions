import dot from 'dot-prop-immutable-chain'

/**
 * @function useSetEffect
 * @description Set Data
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useSetEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store.sets.length > 0) {
      const selected = state.store.sets[0]

      switch (selected.type) {
        case 'SET_SINGLE_REQUEST':
          state.auth.instance[selected.access].set(selected.key, selected.value)
          dispatch({
            type: "SET_SINGLE_SUCCESS",
          })
          break;
        case 'SET_MULTIPLE_REQUEST':
          state.auth.instance[selected.access].setMultiple(selected.keys, selected.inputs)
          dispatch({
            type: "SET_MULTIPLE_SUCCESS",
          })
          break;
        case 'SET_REQUEST':


          if (selected) {
            const runEffect = async () => {
              let listUpdated
              const { access, key, keys, inputs, space, append, override } = selected
              try {
                if (space) {
                  if (append) {
                    const data = await state.spaces[space].instance[access].get(append)
                    if (data) {
                      /**
                       * IF : key
                       * TRUE : Update object 
                       * FALSE : Update array 
                       */
                      if (key) {
                        listUpdated = {
                          ...data,
                          [key]: inputs
                        }
                      } else {
                        listUpdated = Array.isArray(data) ? [...data, inputs] : [data, inputs]
                      }
                    } else {
                      if (key) {
                        listUpdated = { [key]: inputs }
                      } else {
                        listUpdated = [inputs]
                      }
                    }
                    const list = await state.spaces[space].instance[access].set(append, listUpdated)
                    dispatch({
                      type: "SET_SUCCESS",
                      payload: list
                    })
                    if (selected.update) {
                      dispatch({
                        type: "GET_REQUEST",
                        access,
                        key: selected.update,
                        space,
                      })
                    }
                  } else {
                    await state.spaces[space].instance[access].setMultiple(keys, inputs)
                    dispatch({
                      type: "SET_SUCCESS",
                    })
                    if (selected.update) {
                      dispatch({
                        type: "GET_REQUEST",
                        access,
                        key: selected.update,
                        space,
                      })
                    }
                  }

                } else {
                  if (append) {
                    const data = await state.auth.instance[access].get(append)
                    if (data) {
                      listUpdated = Array.isArray(data) ? [...data, inputs] : [data, inputs]
                    } else {
                      listUpdated = [inputs]
                    }
                    Array.isArray(data)
                      ? await state.instance[access].set(append, listUpdated)
                      : !override // todo set system for overriding data... add to backup space? 
                        ? await state.instance[access].set(append, listUpdated)
                        : null

                  } else {
                    await state.auth.instance[access].setMultiple(keys, inputs)
                  }
                }
              } catch (error) {
                console.log(error)
                dispatch({
                  type: "SET_FAILURE",
                })
              }


            }
            runEffect();
          }


          break;
        case 'SET_INSERT_REQUEST':
          let data, branch, branchIndex
          try {
            if (selected.key)
              data = dot.merge(state.profile[selected.index], `${selected.key}`, selected.input)
            else
              data = dot.merge(state.profile, `${selected.index}`, selected.input)[selected.index]

            state.instance[selected.access].set(selected.index, data)
            dispatch({
              type: "SET_INSERT_SUCCESS",
              index: selected.index,
              key: selected.key,
              payload: data
            })
            setDispatched(true)

          } catch (error) {
            dispatch({
              type: "SET_INSERT_FAILURE",
              payload: error
            })
          }
          break;
        case 'SET_MERGE_REQUEST':
          let dataMarge
          try {

            if(selected.space) {
              dataMarge = selected.delta
              ? dot(state['@'][state.address].spaces[selected.space][selected.access])
                .merge(`${selected.key}.${selected.delta}`, selected.value)
                .value()[selected.key]
              : dot(state['@'][state.address].spaces[selected.space][selected.access])
                .merge(`${selected.key}`, selected.value)
                .value()[selected.key]
             /**
               * 3Box Set
               * Access the local initialized instance of the SPACE and set data.
               */
              state.auth.spaces[selected.space].instance[selected.access].set(selected.key, dataMarge)
              .then(res => {
                dispatch({
                  type: "SET_MERGE_SUCCESS",
                  access: selected.access,
                  key: selected.key,
                  space: selected.space,
                  payload: dataMarge
                })
                setDispatched(true)
              })

            } else {
              dataMarge = selected.delta
              ? dot(state['@'][state.address].profile)
                .merge(`${selected.key}.${selected.delta}`, selected.value)
                .value()[selected.key]
              : dot(state['@'][state.address].profile)
                .merge(`${selected.key}`, selected.value)
                .value()[selected.key]
              /**
               * 3Box Set
               * Access the local initialized instance of the PROFILE and set data.
               */
              state.instance[selected.access].set(selected.key, dataMarge)
              .then(res => {
                dispatch({
                  type: "SET_MERGE_SUCCESS",
                  index: selected.key,
                  key: selected.key,
                  payload: dataMarge
                })
                setDispatched(true)
              })
            }



          } catch (error) {
            console.log(error)
            dispatch({
              type: "SET_MERGE_FAILURE",
              payload: error
            })
          }
          break;

        default:
          break;
      }
    }
  }, [state.store.sets])

  return dispatched
}

/* --- Export --- */
export default useSetEffect