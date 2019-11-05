/**
 * @function useGetSpaceEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useGetSpaceEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store && state.store.spaces) {
      const selected = state.store.spaces[0]
      if (selected) {
        const runEffect = async () => {
          const { space, address } = selected
          try {
            const read = await state.static.getSpace(address, space)
            dispatch({
              type: 'GET_SPACE_SUCCESS',
              space,
              access: 'public',
              address,
              payload: read
            })
            setDispatched(true)
          } catch (error) {
            dispatch({
              type: 'GET_SPACE_FAILURE',
              payload: error
            })
            setDispatched(true)
          }
        }
        runEffect();
      }
    }
  }, [state.store.spaces])

  return dispatched
}

/* --- Export --- */
export default useGetSpaceEffect