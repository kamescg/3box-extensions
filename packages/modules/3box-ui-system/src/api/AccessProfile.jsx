/**
 * @function AccessLogin
 * @description Require 3Box isLoggedIn state to access children. 
 * @param {Object} props 
 */
/* --- Global --- */
import React from 'react'
import PropTypes from 'prop-types'
import { BoxContext } from '3box-ui-state'
import { useOpenRequestEffect } from './effects'

/* --- Local --- */
import { Component } from './component'
import Login from './Login'
import { Avatar } from '..'

const AccessLogin = ({ box, children, ...props }) => { 
const login = useOpenRequestEffect(box)
 return login.isLoggedIn
  ? children || Component(props.componentisLoggedIn)
  : props.componentLogin
}

AccessLogin.defaultProps = {
  componentLogin: <Login />,  
  componentisLoggedIn: <Avatar />,  
  isloginAuto: false,
  isLoginDisabled: false,  
}

AccessLogin.propTypes = {
  componentLogin: PropTypes.func,
  isloginAuto: PropTypes.bool,
  isLoginDisabled: PropTypes.bool,
}

export default props =><BoxContext>{ box => ( <AccessLogin box={box} {...props} /> )}</BoxContext>