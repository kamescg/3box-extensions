/* --- Global --- */
import React from 'react'
import { BoxInject } from '3box-ui-state'
import { Span } from '@horizin/design-system-atoms'
import Avatar from './Avatar'
import { useOpenRequestEffect } from './effects'

/* --- Component --- */
const Login = ({ sxLoggedOut, sxLoading, sxLoggedIn, box, ...props }) => {
  const login = useOpenRequestEffect(box)
  return (
    <>
    {
      <span onClick={box.login} >
        {
          !login.isDispatched && !login.isLoggedIn
          ? !React.isValidElement(props.componentIsLoggedOut)
            ? React.createElement(props.componentIsLoggedOut)
            : props.componentIsLoggedOut || null
          : null
        }
      </span>
    }

    <span>
      {
        login.isDispatched && !login.isLoggedIn
        ? !React.isValidElement(props.componentIsLoading)
            ? React.createElement(props.componentIsLoading)
            : props.componentIsLoading || null
        : null
      }
    </span>

    {
      login.isLoggedIn &&
      <span>
        {
          props.children || !React.isValidElement(props.componentIsLoggedIn)
            ? React.createElement(props.componentIsLoggedIn)
            : props.componentIsLoggedIn || null
        }
      </span>
    }
    
    </>
  )
}

Login.defaultProps = {
  componentIsLoggedOut: (
    <Span tag pointer >Login</Span>
    ),
  componentIsLoading: (
    <Span tag pointer >Loading</Span>
  ),
  componentIsLoggedIn:(
    <Span ><Avatar /></Span>
    )
}

Login.propTypes = {
  spaceAuto: PropTypes.bool
}


export default props => <BoxInject><Login {...props} /></BoxInject>