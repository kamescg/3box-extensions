/**
 * @function useRemoveEffect
 * @description Remove data.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useRemoveEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store && state.store.removes) {
      const selected = state.store.removes[0]
      if (selected) {
        const runEffect = async () => {
          const { space, access, index } = selected
          try {
            let read
            if (selected.space) {
              read = await state.auth.spaces[selected.space].instance[selected.access].remove(selected.key)
            } else {
              read = await state.instance[selected.access].remove(selected.key)
            }
            console.log(selected, read, 'remove effect')
            dispatch({
              type: 'REMOVE_SUCCESS',
              space,
              access,
              index,
              payload: read
            })
            setDispatched(true)

            // Trigger 
            dispatch({
              type: "GET_REQUEST",
              access,
              key: selected.key,
              space,
            })

          } catch (error) {
            dispatch({
              type: 'REMOVE_FAILURE',
              payload: error
            })
            setDispatched(false)
          }
        }
        runEffect();
      }
    }
  }, [state.store.removes])

  return dispatched
}

/* --- Export --- */
export default useRemoveEffect