/* --- Global --- */
import React from 'react'
import { BoxInject } from '3box-ui-state'
import { Flex, Span } from '@horizin/design-system-atoms'
import Avatar from './Avatar'
import Logout from './Logout'
import ProfileIdentity from './ProfileIdentity'
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
    <Span variants={['tag']} effects={['white', 'pointer']} >Login</Span>
    ),
  componentIsLoading: (
    <Span variants={['tag']} effects={['white']} >Loading</Span>
  ),
  componentIsLoggedIn:(
    <Flex alignCenter >
      <Avatar />
      <Atom.Box sx={{ml: 2}}>
        <ProfileIdentity/>
        <br/><Logout/>
      </Atom.Box>
    </Flex>
    )
}

Login.propTypes = {
  spaceAuto: PropTypes.bool
}


export default props => <BoxInject><Login {...props} /></BoxInject>