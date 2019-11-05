/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { BoxContext } from '3box-ui-state'
import { Component } from '@horizin/ui-compose'
import { useOpenRequestEffect, useSpaceReadyEffect } from './effects'
import Login from './Login'
import SpaceOpen from './SpaceOpen'
/**
 * @function AccessSpaces
 * @param {*} props 
 */
const AccessSpaces = ({ box, ...props }) => { 
  const login = useOpenRequestEffect(box)
  const space = useSpaceReadyEffect(box, props)
  return(
    <>
      {
        login.ready
        ? null
        : props.componentIsLoggedOut
      }

      {
        login.isLoggedIn && !space.ready
        ? Component(props.componentIsLoggedIn, { space: props.space, auto:props.auto})
        : null
      }
      
      {
        login.isLoggedIn && space.ready
        ? props.children
        : null
      }
  
    </>
)}

AccessSpaces.defaultProps = {
  componentLogin: <Login />,  
  componentIsLoggedOut: <Login />,  
  componentIsLoggedIn: SpaceOpen,
  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isLoginDisabled: false,
  
}

AccessSpaces.propTypes = {
  space: PropTypes.string,
}

export default props =>
<BoxContext>
  { box => ( <AccessSpaces box={box} {...props} /> )}
</BoxContext>