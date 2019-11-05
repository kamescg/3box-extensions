/**
 * @function useCloseBoxEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useCloseBoxEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.isLoggingOut) {
      try {
        state.instance.logout()
          .then(res => {
            dispatch({
              type: "LOGOUT_SUCCESS",
            })
            setDispatched(true)
          })
      } catch (error) {
        console.log(error)
        dispatch({
          type: "LOGOUT_FAILURE",
        })
        setDispatched(false)
      }
    }
  }, [state.isLoggingOut])

  return dispatched
}

/* --- Export --- */
export default useCloseBoxEffect