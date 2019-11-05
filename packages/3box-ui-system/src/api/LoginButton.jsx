/* --- Global Dependencies --- */
import React, { useState } from 'react'
import { Button } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import { useOpenRequestEffect } from './effects'
import Avatar from './Avatar'

/* --- React Component --- */
const Login = ({ box, ...props }) => {
  const login = useOpenRequestEffect(box)
  
  return (
    <>
    {
      <span onClick={box.enable} >
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
    <Button variants={['button']} effects={['blue', 'pointer']} >3Box</Button>
    ),
  componentIsLoading: (
    <Button variants={['button']} effects={['white']} >3Box Loading</Button>
  ),
  componentIsLoggedIn:(
    <Button variants={['button']} effects={['white', 'pointer']} >3Box Active</Button>
    )
}

Login.propTypes = {
  spaceAuto: PropTypes.bool
}


export default props => <BoxInject><Login {...props} /></BoxInject>