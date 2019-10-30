/**
 * @function ThreadJoin
 * @description Join a thread.
 */
/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'

/* --- React Component --- */
const BoxOpenSpace = ({ box, styled, styledLoading, componentLoading, children, ...props }) => {
  const [ dispatchRequest, setDispatchRequest ] = useState()
  const [ message, setMessage ] = useState()
  const [ loading, setLoading ] = useState(false)
  const [ isSpaceReady, setIsSpaceReady ] = useState(false)
  const [ isThreadReady, setIsThreadReady ] = useState(false)

  /**
   * @function isSpaceReadyEffect
   * @description Check if 3Box Space is ready.
   */
  useEffect( () => { 
    if(!isSpaceReady) {
      console.log('getting space')
      let select = dot(box).get(`auth.spaces.${props.space}.instance`).value()
      if(select) {
        setIsSpaceReady(true)
        setMessage('space ready')
      }
    }
  }, [box.aut])
  
  /**
   * @function isThreadReadyEffect
   * @description Check if 3Box Space is ready.
   */
  useEffect( () => { 
    if(!isThreadReady) {
      let select = dot(box).get(`auth.threads.${props.threadName}.instance`).value()
      if(select) {
        setMessage('space and thread ready')
        setIsThreadReady(true)
      }
    }
  }, [box.auth])

  /**
   * @function isJoinRequestedEffect
   * @description Manage component dispatch requests.
   */
  useEffect( () => { 
    if(!isThreadReady && isSpaceReady && (dispatchRequest || props.auto)) {
      box.joinThread({
        threadAddress: props.threadAddress,
        threadName: props.threadName,
        space: props.space,
        options: props.options
      });
    }
  }, [
    box.auth.spaces[props.space], // Trigger Effect (Auth space changes often)
    dispatchRequest, // Manual Request 
    isSpaceReady // Requirements Met
  ])


  /**
   * @function ComponentActionHandler
   * @description Handle component click event. 
   */
  const actionHandler = () => {
    setDispatchRequest(true)
    setLoading(true)
  }

  return (
    !props.auto ? loading 
      ? componentLoading ? componentLoading :
        <Box fullWidth>
          {message}
          <Button {...styledLoading}>Loading Thread...</Button>
        </Box>
      : children ? <Span onClick={actionHandler}>{children}</Span>
        :<Box fullWidth onClick={actionHandler}>
          <Button {...styled}>join <strong>{props.threadName}</strong> thread</Button>
        </Box>
    : null
  )
}

BoxOpenSpace.defaultProps = {
  threadName: undefined,
  labelLoading: 'Loading Thread...',
  styled: {
    fontWeight: 'normal',
    width: '100%'
  },
  styledLoading: {
    width: '100%'
  },
}

BoxOpenSpace.propTypes = {
  space: PropTypes.string.isRequired,
}

export default props =>
<BoxInject>
  <BoxOpenSpace {...props} />
</BoxInject>
