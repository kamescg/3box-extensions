/**
 * @function MessageDelete
 * @description Manage thread post delete request
 * @version 1.0.0
 */

/* --- Global --- */
import React, { useEffect, useState } from 'react';
import { BoxInject } from '3box-ui-state'
import BoxAccess from '../components/BoxAccess';
import { useSpaceReadyEffect, useThreadReadyEffect } from './effects'

const MessageDelete = ({ box, ...props }) => {
  /* --- State --- */
  const [ isRequested, setIsRequested ] = useState(false)
  
  /* --- Handlers --- */
  const deleteRequestHandler = () => setIsRequested(true)
  
  /* --- Effects --- */
  useEffect( () => { 
    if(isRequested) {
      box.threadPostDelete({
        space: props.space, 
        threadName: props.threadName, 
        postId: props.postId
      })
    }
  }, [isRequested])
  // const isSpaceReady = useSpaceReadyEffect(box, props)
  // const isThreadReady = useThreadReadyEffect(box, props)

  /* --- Component --- */
  return (
  props.children
  ? <A.Span onClick={deleteRequestHandler}>{props.children}</A.Span>
  : props.isClickToAccess
    ? (
      <CMS.AccessThread
        spaceAuto={props.spaceAuto} threadAuto={props.threadAuto}
        space={props.space}
        threadAddress={props.threadAddress}
        threadName={props.threadName}
        threadOptions={{
          firstModerator: props.firstModerator,
          members: true
        }}
        componentIsLoggedOut={props.componentIsLoggedOut}
        componentIsLoading={props.componentIsLoading}
        componentIsLoggedIn={props.componentIsLoggedIn}

        componentIsSpaceClosed={props.componentIsSpaceLoading}
        componentIsSpaceLoading={props.componentIsSpaceLoading}
        componentIsSpaceOpen={props.componentIsSpaceOpen}

        componentIsThreadClosed={props.componentIsThreadClosed}
        componentIsThreadLoading={props.componentIsThreadLoading}
        componentIsThreadJoined={props.componentIsThreadJoined}

        >
          <A.Span onClick={deleteRequestHandler}>{props.componentIsThreadJoined}</A.Span>
      </CMS.AccessThread>
    )
    : isThreadyReady
    ? (
        <A.Span
          {...props.styledLablActive}
          onClick={deleteRequestHandler}>
          {props.componentIsThreadReady}
        </A.Span>
      )
      :(
        <>
          <A.Toast content={<DeleteAttemptMessage/>}>
            <A.Flex alignCenter>
              <A.Span
                {...props.styledLablLoading}
              >
                {props.isLoadingComponent}
              </A.Span>
            </A.Flex>
          </A.Toast>
        </>
    )
)}

const DeleteAttemptMessage = props =>
<A.Flex column>
  <A.Span xs mb={3}>Open Space to Complete Action</A.Span>
  <BoxAccess
    level='thread'
    space={SPACE}
    threadName={props.threadName}
  />
</A.Flex>

MessageDelete.defaultProps = {
  isClickToAccess: true,
  componentIsLoggedOut: <A.Span pointer xxs tag='white' opacity={1}>Login <A.Span opacity={.6} pl={1} ><A.LoadingSquare /></A.Span></A.Span>,
  componentIsLoading: <A.Span pointer xxs tag='white' opacity={1} >Loading <A.Span pl={1}><A.LoadingSquare className='active' /></A.Span></A.Span>,
  componentIsLoggedIn: <A.Span pointer xxs tag='white' opacity={1} >Opened <A.Span pl={1}><A.LoadingSquare className='active' /></A.Span></A.Span>,
  componentIsSpaceOpen: <A.Span pointer xxs tag='blue' >Space Opened</A.Span>,
  componentIsThreadJoined: <A.Span pointer xxs tag='red' >Remove from List</A.Span>,
  access: 'public',
  spaceAuto: true,
  styledLablActive: {
    variant: 'red'
  },
  styledLablLoading: {
    variant: 'white'
  },
  styledLoading: {
    xs: true,
    variant: 'white'
  },
  styled: {
    xs: true,
    variant: 'red'
  }
}

MessageDelete.propTypes = {
  spaceAuto: PropTypes.bool
}


export default props =><BoxInject><MessageDelete {...props} /></BoxInject>
