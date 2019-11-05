/**
 * @function useInsertEffect
 * @description Insert Data
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useInsertEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store && state.store.inserts) {
      const selected = state.store.inserts[0]
      if (selected) {
        const runEffect = async () => {
          const {
            space, // Initialize Space
            access, // Public or Private
            index, // Root level key
            key, // Key of inserted property 
            value // Value of inserted property 
          } = selected
          try {
            let list
            list = await state.spaces[space].instance[access].get(index)
            const listUpdated = { ...list, [key]: value }
            const isListSet = await state.spaces[space].instance[access].set(index, listUpdated)
            dispatch({
              type: 'INSERT_SUCCESS',
              payload: listUpdated,
              address: selected.address,
              space,
              index,
              key
            })
            setDispatched(true)

          } catch (error) {
            dispatch({
              type: 'INSERT_FAILURE',
              payload: error
            })
            setDispatched(false)
          }

        }
        runEffect();
      }
    }
  }, [state.store.inserts])

  return dispatched
}

/* --- Export --- */
export default useInsertEffect