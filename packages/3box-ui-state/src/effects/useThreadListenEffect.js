/**
 * @function useThreadListenEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useThreadListenEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store && state.store.listens) {
      const selected = state.store.listens[0]
      if (selected) {
        const runEffect = async () => {
          try {
            let threadId = selected.threadName || selected.threadAddress || undefined
            if (!threadId) throw new Error('Thread Listen: Thread ID (name or address) is unset')
            dispatch({
              type: 'THREAD_LISTEN_SUCCESS',
              id: threadId,
              payload: callback
            })
          } catch (error) {
            console.log(error)
            dispatch({
              type: 'THREAD_LISTEN_FAILURE',
              threadAddress: selected.threadName,
              threadName: selected.threadName,
            })
          }
        }
        runEffect();
      }
    }
  }, [state.store.listens])

  return dispatched
}

/* --- Export --- */
export default useThreadListenEffect