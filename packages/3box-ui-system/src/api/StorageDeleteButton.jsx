/**
 * @function StorageDeleteButton
 * @description Delete items from personal space.
 */
/* --- Global --- */
import dot from 'dot-prop-immutable-chain'
import React, { useEffect, useState } from 'react';
import { BoxInject } from '3box-ui-state'
import { Button } from '@horizin/design-system-atoms';
import BoxAccess from '../components/BoxAccess';


import { useSpaceReadyEffect } from './effects'
const StorageDeleteButton = ({ box, ...props }) => {
  /* --- State --- */
  const isSpaceReady = useSpaceReadyEffect(box, props)
  const [ isRequested, setIsRequested ] = useState(false)
  
  /* --- Handlers --- */
  const onDeleteRequestHandler = () => setIsRequested(true)
  
  /* --- Effects --- */



  /**
   * @function deleteRequestEffect
   * @description Handle User Input Request
   */
  useEffect(() => {
    if (isRequested && props.index && props.delta) {
      box.delete({
        address: props.address,
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
      })
    }
  }, [isRequested])

  /* --- Component --- */
  return (
  <Atom.Button onClick={onDeleteRequestHandler} >Delete</Atom.Button>
)}



StorageDeleteButton.defaultProps = {
  access: 'public'
}

StorageDeleteButton.propTypes = {
  
}


export default props =><BoxInject><StorageDeleteButton {...props} /></BoxInject>
