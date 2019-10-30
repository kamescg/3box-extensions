/**
 * @function useAutoRequestProfileEffect
 * @description Auto enable the wallet by sending disaptch to the enable effect. 
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useAutoRequestProfileEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (!dispatched && state.address && state.isRequestProfileAuto) {

      'getting profile'
      dispatch({
        type: 'GET_PROFILE_REQUEST',
        address: state.address
      })
      setDispatched(true)
    }
  }, [state.address, state.isRequestProfileAuto])

  return dispatched
}

/* --- Export --- */
export default useAutoRequestProfileEffect