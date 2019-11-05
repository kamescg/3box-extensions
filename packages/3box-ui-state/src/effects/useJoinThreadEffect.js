/**
 * @function useJoinThreadEffect
 * @description Join Thread
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useJoinThreadEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()
  useEffect(() => {
    if (state.store && state.store.threads) {
      const selected = state.store.threads[0]
      if (selected && state.spaces && state.auth.spaces[selected.space] && state.auth.spaces[selected.space].instance) {
        try {

          const runEffect = async () => {
            let thread, members, moderators
            if (selected.threadAddress) {
              thread = await state.spaces[selected.space].instance.joinThreadByAddress(selected.threadAddress, selected.options)
            } else {
              selected.options = {
                ...selected.options,
                firstModerator: state.address // Inject address into first moderator. Don't want to deal with DID resolution right now. 
              }
              thread = await state.spaces[selected.space].instance.joinThread(selected.threadName, selected.options)
            }
            const posts = await thread.getPosts()
            if (thread._members) {
              members = await thread.listMembers()
              moderators = await thread.listModerators()
            }
            dispatch({
              type: "JOIN_THREAD_SUCCESS",
              instance: thread,
              threadName: selected.threadName,
              firstModerator: state.address,
              posts,
              members,
              moderators,
              space: selected.space
            })
            setDispatched(true)
          };
          runEffect();
        } catch (error) {
          dispatch({
            type: "JOIN_THREAD_FAILURE",
            space: selected.space,
            threadName: selected.threadName,
            firstModerator: state.address,
          })
        }
      }
    }
  }, [state.store, state.store.threads])

  return dispatched
}

/* --- Export --- */
export default useJoinThreadEffect