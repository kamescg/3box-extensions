/* --- Global Dependencies --- */
import React, { useState } from 'react'
import { Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import { Component } from '@horizin/ui-compose'
import { useSpaceOpenRequestEffect, useOpenRequestEffect, useSpaceReadyEffect } from './effects'

/* --- React Component --- */
const OpenSpace = ({ box, isMenuAvailable, styled, ...props }) => {
  // Login Status
  const login = useOpenRequestEffect(box)
  // Space Access Request
  const [request, setRequest] = useState(props.auto)
  const space = useSpaceOpenRequestEffect(box, {space: props.space,request})
  const spacess = useSpaceReadyEffect(box, props)

  const styleDefault = {
    variants: ['tag'],
    effects: ['white', 'pointer']
  }

  return (
    <>
    {
      !login.isDispatched && !login.isLoggedIn &&
      <>
        {Component(props.componentIsLoggedOut, {
          ...styleDefault, 
          loggedOutLabel: props.loggedOutLabel
          })}
      </>
    }

    {
      login.isDispatched && !login.isLoggedIn &&
      Component(props.componentIsLoading, {...styleDefault})
    }

    {
      login.isLoggedIn && !space.loading && !space.ready &&
      <span onClick={setRequest}>
        {Component(props.componentIsLoggedIn, {...styleDefault})}
      </span>
    }

    {
      login.isLoggedIn && space.loading && !space.ready &&
      Component(props.componentSpaceRequest, {...styleDefault})
    }
    {
      login.isLoggedIn && space.ready &&
      Component(props.componentSpaceOpen, {...styleDefault,
        space: props.space
      })
    }
    </>
  )
}

const LoggedOut = props =><Span {...props}>{props.loggedOutLabel}</Span>
const Loading = props =><Span {...props}>Loading</Span>
const LoggedIn = props =><Span pointer bgWhite cNight {...props}>Open Space Now</Span>
const SpaceRequest = props =><Span {...props}>Requesting Access</Span>
const SpaceOpen = props =><Span {...props}>space <strong>{props.space}</strong> open</Span>

OpenSpace.defaultProps = {
  componentIsLoggedOut: LoggedOut,
  componentIsLoading: Loading,
  componentIsLoggedIn: LoggedIn,
  componentSpaceRequest: SpaceRequest,
  componentSpaceOpen: SpaceOpen,
  loggedOutLabel: 'Authentication Required'
}

OpenSpace.propTypes = {
  spaceAuto: PropTypes.bool,
  loggedOutLabel: PropTypes.string
}

export default props =><BoxInject><OpenSpace {...props} /></BoxInject>