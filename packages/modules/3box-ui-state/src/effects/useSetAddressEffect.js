/**
 * @function useSetAddressEffect
 * @description Set the global ETH address with shorthand properties
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Local --- */
import { shortenAddress, isAddress } from './utilities'

/* --- Component --- */
const useSetAddressEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    const address = state.address
    if (isAddress(address)) {
      dispatch({
        type: "SET_ADDRESS",
        address,
        addressShortened: shortenAddress(address, 6),
        addressTrimmed: address.substring(0, 10)

      })
    }
  }, [state.address])

  return dispatched
}

/* --- Export --- */
export default useSetAddressEffect