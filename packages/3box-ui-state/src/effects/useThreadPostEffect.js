/**
 * @function useThreadPostEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useThreadPostEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store && state.store.posts) {
      try {
        const postSelected = state.store.posts[0]
        if (postSelected && state.auth.threads[postSelected.threadName].instance) {
          const runEffect = async () => {
            let posts
            switch (postSelected.type) {
              case 'THREAD_POST_PUBLISH_REQUEST':
                await state.auth.threads[postSelected.threadName].instance.post(postSelected.post)
                posts = await state.auth.threads[postSelected.threadName].instance.getPosts()
                dispatch({
                  type: "THREAD_POST_PUBLISH_SUCCESS",
                  space: postSelected.space,
                  threadName: postSelected.threadName,
                  firstModerator: state.address,
                  payload: posts,
                })

                break;

              case 'THREAD_POST_DELETE_REQUEST':
                if (postSelected.postId) {
                  const thread = state.auth.threads[postSelected.threadName]
                  await state.auth.threads[postSelected.threadName].instance.deletePost(postSelected.postId)
                  posts = await state.auth.threads[postSelected.threadName].instance.getPosts()
                  dispatch({
                    type: "THREAD_POST_DELETE_SUCCESS",
                    space: postSelected.space,
                    threadName: postSelected.threadName,
                    firstModerator: state.address,
                    payload: posts,
                  })


                } else {
                  dispatch({
                    type: "THREAD_POST_DELETE_FAILURE",
                    threadName: postSelected.threadName,
                    space: postSelected.space,
                    threadName: postSelected.threadName,
                    firstModerator: box.address,
                  })

                }
                break;

              default:
                break;
            }
          };
          runEffect();
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [state.store, state.store.posts])

  return dispatched
}

/* --- Export --- */
export default useThreadPostEffect