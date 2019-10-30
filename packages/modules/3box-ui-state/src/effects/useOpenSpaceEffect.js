/**
 * @function useOpenSpaceEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useOpenSpaceEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.instance && state.store && state.store.open) {
      const selected = state.store.open[0]
      if (selected) {
        try {
          const runEffect = async () => {
            let threads
            const space = await state.instance.openSpace(selected.space)
            if (space.all) {
              threads = await space.subscribedThreads()
            }
            dispatch({
              type: "OPEN_SPACE_SUCCESS",
              instance: space,
              space: selected.space,
              threads
            })
            setDispatched(true)
          };
          runEffect();
        } catch (error) {
          dispatch({
            type: "OPEN_SPACE_FAILURE",
            payload: error,
            space: selected.space,
          })
          setDispatched(false)
        }
      }
    }
  }, [state.instance.openSpace, state.store.open])

  return dispatched
}

/* --- Export --- */
export default useOpenSpaceEffect