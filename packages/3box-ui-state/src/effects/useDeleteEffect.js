/**
 * @function useDeleteEffect
 * @description Delete Thread Post
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useDeleteEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store && state.store.deletes) {
      const selected = state.store.deletes[0]
      if (selected) {
        const runEffect = async () => {
          const { space, access, index, key } = selected
          try {
            let read, write
            if (space) {
              read = state['@'][state.address].spaces[space][access][index]
              delete read[key]
              write = await state.spaces[space].instance[access].set(index, read)
            } else {
              read = state.auth.profile[index]
              delete read[key]
              write = await state.auth.instance[access].set(index, read)
            }
            dispatch({
              type: 'DELETE_SUCCESS',
              id: key,
              space,
              payload: read
            })
            setDispatched(true)
          } catch (error) {
            console.log(error)
            dispatch({
              type: 'DELETE_FAILURE',
              payload: error
            })
          }


        }
        runEffect();
      }
    }
  }, [state.store.deletes])

  return dispatched
}

/* --- Export --- */
export default useDeleteEffect