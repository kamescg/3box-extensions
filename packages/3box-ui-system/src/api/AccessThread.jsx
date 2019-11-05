/**
 * @function AccessThread
 * @description Manage access to the a 3Box Space Thread.
 */
/* --- Global --- */
import React from 'react'
import { BoxContext } from '3box-ui-state'
import { 
  useOpenRequestEffect,
  useSpaceReadyEffect,
  useThreadReadyEffect,
} from './effects'

/* --- Local --- */
import Login from './Login'
import SpaceOpen from './SpaceOpen'
import ThreadJoin from './ThreadJoin'

/* --- Component --- */
const AccessThread = ({ box, ...props }) => { 
  const login = useOpenRequestEffect(box)
  const space = useSpaceReadyEffect(box, props)
  const thread = useThreadReadyEffect(box, props)

  return(
    <>
      {
        login.isLoggedIn
        ? null
        : <Login
            isLoggedIn={props.children}
            componentIsLoggedOut={props.componentIsLoggedOut}
            componentIsLoading={props.componentIsLoading}
            componentIsLoggedIn={props.componentIsLoggedIn}
          />
      }

      {/* Space Open States */}
      {
        login.isLoggedIn && !space.ready
        ? <SpaceOpen
            space={props.space}
            auto={props.spaceAuto}
            componentIsClosed={props.componentIsClosed}
            componentIsLoading={props.componentIsLoading}
            componentIsOpen={props.componentIsOpen}
          />
        : null
      }

      {/* Thread Join States */}
      {
        login.isLoggedIn && 
        space.isReady && 
        !thread.isReady
        ? <ThreadJoin
            auto={props.threadAuto} 
            space={props.space}
            threadName={props.threadName}
            options={props.options}
            componentIsClosed={props.componentIsThreadClosed}
            componentIsLoading={props.componentIsThreadLoading}
            componentIsJoined={props.componentIsThreadJoined}
          />
        : null
      }
      
      {
        login.isLoggedIn && space.isReady && thread.isReady
        ? props.children
        : null
      }
  
    </>
)}

AccessThread.defaultProps = {
  componentLogin: <Login />,
  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isLoginDisabled: false,
}

AccessThread.propTypes = {
  space: PropTypes.string,
}

export default props =><BoxContext>{ box => ( <AccessThread box={box} {...props} /> )}</BoxContext>