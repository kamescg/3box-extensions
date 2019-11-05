/**
 * @function StorageDelete
 * @description Delete items from personal space.
 */
/* --- Global --- */
import dot from 'dot-prop-immutable-chain'
import React, { useEffect, useState } from 'react';
import { BoxInject } from '3box-ui-state'
import { Button } from '@horizin/design-system-atoms';
import BoxAccess from '../components/BoxAccess';


import { useSpaceReadyEffect } from './effects'
const StorageDelete = ({ box, ...props }) => {
  /* --- State --- */
  const [ isRequested, setIsRequested ] = useState(false)
  
  /* --- Handlers --- */
  const deleteRequestHandler = () => setIsRequested(true)
  
  /* --- Effects --- */

  const isSpaceReady = useSpaceReadyEffect(box, props)

  /**
   * @function deleteRequestEffect
   * @description Handle User Input Request
   */
  useEffect(() => {
    if (
      isRequested &&
      props.space && props.index && props.delta) {
      box.delete({
        address: props.address,
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
      })
    }
  }, [isRequested, props.data])

  /* --- Component --- */
  return (
  props.children
  ? <A.Span onClick={deleteRequestHandler}>{props.children}</A.Span>
  : props.isClickToAccess
    ? (
      <CMS.AccessSpace
        spaceAuto
        level='space'
        space={props.space}
        componentIsLoggedOut={props.componentIsLoggedOut}
        componentIsLoading={props.componentIsLoading}
        componentIsLoggedIn={props.componentIsLoggedIn}
        >
          <A.Span onClick={deleteRequestHandler}>{props.componentIsSpaceOpen}</A.Span>
      </CMS.AccessSpace>
    )
    : isSpaceReady
    ? (
        <A.Span
          {...props.styledLablActive}
          onClick={deleteRequestHandler}>
          {props.componentIsSpaceOpen}
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
    level='space'
    space={SPACE}
  />
</A.Flex>

StorageDelete.defaultProps = {
  isClickToAccess: true,
  componentIsLoggedOut: <A.Span pointer xxs tag='white' opacity={1}>Login <A.Span opacity={.6} pl={1} ><A.LoadingSquare /></A.Span></A.Span>,
  componentIsLoading: <A.Span pointer xxs tag='white' opacity={1} >Loading <A.Span pl={1}><A.LoadingSquare className='active' /></A.Span></A.Span>,
  componentIsLoggedIn: <A.Span pointer xxs tag='white' opacity={1} ><A.Span pl={1}><A.LoadingSquare className='active' /></A.Span></A.Span>,
  componentIsSpaceOpen: <A.Span pointer xxs tag='red' >Delete</A.Span>,
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

StorageDelete.propTypes = {
  spaceAuto: PropTypes.bool
}


export default props =><BoxInject><StorageDelete {...props} /></BoxInject>
