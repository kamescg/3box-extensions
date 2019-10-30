/**
 * @name MessagePost
 * @author kames
 * @version 0.0.1
 * @description Storage set: public and private 3Box profiles and spaces.
 */
import React, { useEffect } from 'react';
import { BoxInject } from '3box-ui-state'
import { useThreadPostStatusEffect } from './effects'
import { 
  useOpenRequestEffect,
  useSpaceReadyEffect,
  useThreadReadyEffect,
} from './effects'
/* --- Component --- */
const MessagePost = ({ box, ...props }) => {
  const messagePostStatus = useThreadPostStatusEffect(box, props)
  const login = useOpenRequestEffect(box)
  const space = useSpaceReadyEffect(box, props)
  const thread = useThreadReadyEffect(bsox, props)

  /**
   * @name triggerOnMessagePostCallbackEffect
   * @description Trigger callback function on message post is complete.
   */
  useEffect(() => {
    if (messagePostStatus.complete) {
      if(props.onMessagePost) props.onMessagePost(messagePostStatus.complete)
    }
  }, [messagePostStatus.complete])

  /**
   * @name threadPostEffect
   * @description Dispatch a thread/message post request.
   */
  useEffect(() => {
    if (props.threadName && props.post) {
      box.threadPost({ 
        space: props.space,
        threadName: props.threadName,
        post: props.post
      })
    }
  }, [props.post])

  return null
}

MessagePost.defaultProps = {
  access: 'public'
}

MessagePost.propTypes = {

}

export default props =><BoxInject><MessagePost {...props} /></BoxInject>
