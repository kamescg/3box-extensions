/* --- Global --- */
import React from 'react'
import { BoxInject } from '3box-ui-state'
import { Button } from '@horizin/design-system-atoms'
import { Component } from '@horizin/ui-compose'
import { useEnableEffect, useOpenRequestEffect } from './effects'
import EthereumEnable from './EnableEthereum'
import Avatar from './Avatar'

/* ---  Sub-Component --- */
const ButtonLogin = ({label, ...props}) => <Button {...props} >{label}</Button>

/* --- Component --- */
const Login = ({ box, ...props }) => {
  const enabled = useEnableEffect(box)
  const login = useOpenRequestEffect(box)
  return (
    <>
    {
      !enabled.ready && <EthereumEnable />
    }
    {
      enabled.ready && !login.isDispatched && !login.isLoggedIn
      ? <span onClick={box.login} >
          {Component(props.componentLoggedOut, {label: props.loggedOutLabel, ...props.sxLoggedOut})} 
        </span>
      : null
    }
    {
      login.isDispatched && !login.isLoggedIn
      ? Component(props.componentLoading,  {label: props.loadingLabel, ...props.sxLoading})
      : null
    }
    {
      login.isLoggedIn &&
      <span>
        {
          props.children || (
            <>
              {
                props.display === 'avatar'
                ? Component(Avatar,  {label: props.loggedInLabel, ...props.sxLoggedIn})
                : Component(props.componentLoggedIn,  {label: props.loggedInLabel, ...props.sxLoggedIn})
              }
            </>
          )
        }
      </span>
    }
    
    </>
  )
}

Login.defaultProps = {
  loggedOutLabel: 'Login',
  loadingLabel: 'Loading...',
  loggedInLabel: '3Box Active',
  componentLoggedOut: ButtonLogin,
  componentLoading: ButtonLogin,
  componentLoggedIn: ButtonLogin,
  display: 'Button',
  sxLoggedOut: {
    pointer: true,
    Button: true,
  },
  sxLoading: {
    pointer: true,
    Button: true,
  },
  sxLoggedIn: {
    pointer: true,
    Button: true,
  }
}

Login.propTypes = {
  spaceAuto: PropTypes.bool
}


export default props => <BoxInject><Login {...props} /></BoxInject>