/* --- Global Dependencies --- */
import React, { useState } from 'react'
import { Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import { Component } from '@horizin/ui-compose'
import { useSpaceOpenRequestEffect, useOpenRequestEffect, useThreadJoinEffect } from './effects'
import SpaceOpen from './SpaceOpen'

/* --- React Component --- */
const OpenSpace = ({ box, isMenuAvailable, styled, ...props }) => {
  // Login Status
  const login = useOpenRequestEffect(box)
  // Space Access Request
  const [request, setRequest] = useState(props.auto)
  const [requestThread, setThreadRequest] = useState(props.auto)

  const space = useSpaceOpenRequestEffect(box, {space: props.space,request})
  const thread = useThreadJoinEffect(box, {
    requestJoin: requestThread,
    ...props
  })

  const styleDefault = {
    variants: ['tag'],
    effects: ['white', 'pointer']
  }

  return (
    <>

    {/* Authentication */}
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

    {/* Space */}    
    {
      login.isLoggedIn && !space.ready &&
      Component(SpaceOpen, {...props, ...styleDefault})
    }


    {/* Thread */}
    {
      space.ready && !thread.isDispatched &&
      <span onClick={setThreadRequest}>
        {Component(props.componentIsLoggedIn, {...styleDefault})}
      </span>
    }
    {
      space.ready && thread.isDispatched && !thread.isReady &&
        Component(props.componentThreadRequested, {...styleDefault})
    }
    {
      space.ready && thread.isDispatched && thread.isReady &&
        Component(props.componentThreadJoined, {...styleDefault})
    }
    </>
  )
}

const LoggedOut = props =><Span {...props}>{props.loggedOutLabel}</Span>
const Loading = props =><Span {...props}>Loading</Span>
const LoggedIn = props =><Span {...props}>Open Space Now</Span>
const SpaceRequest = props =><Span {...props}>Requesting Access</Span>
const SpaceOpenView = props =><Span {...props}>space <strong>{props.space}</strong> open</Span>
const ThreadRequest = props =><Span {...props}>Joining Thread...</Span>
const ThreadJoined = props =><Span {...props}>thread <strong>{props.threadName}</strong> joined</Span>

OpenSpace.defaultProps = {
  componentIsLoggedOut: LoggedOut,
  componentIsLoading: Loading,
  componentIsLoggedIn: LoggedIn,
  componentSpaceRequest: SpaceRequest,
  componentSpaceOpen: SpaceOpenView,
  componentThreadRequested: ThreadRequest,
  componentThreadJoined: ThreadJoined,
  loggedOutLabel: 'Authentication Required'
}

OpenSpace.propTypes = {
  spaceAuto: PropTypes.bool,
  loggedOutLabel: PropTypes.string
}

export default props =><BoxInject><OpenSpace {...props} /></BoxInject>