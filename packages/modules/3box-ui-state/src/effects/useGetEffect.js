/**
 * @function useGetEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useGetEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store.gets) {
      const selected = state.store.gets[0]
      if (selected) {
        const runEffect = async () => {
          const { space, access, key } = selected
          try {
            let read
            if (space) {
              read = await state.auth.spaces[space].instance[access].get(key)
              dispatch({
                type: 'GET_SUCCESS',
                key,
                access,
                space,
                payload: read
              })
              setDispatched(true)
            } else {
              read = await state.instance[access].get(key)
              dispatch({
                type: 'GET_SUCCESS',
                key,
                access,
                payload: read
              })
              setDispatched(true)
            }
          } catch (error) {
            dispatch({
              type: 'GET_FAILURE',
              payload: error
            })
            setDispatched(false)
          }


        }
        runEffect();
      }
    }
  }, [state.store.gets])
  return dispatched
}

/* --- Export --- */
export default useGetEffect