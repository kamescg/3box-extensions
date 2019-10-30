/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxInject } from '3box-ui-state'

/* --- Local2 Dependencies --- */
import { isAddress } from '../utilities'
import Component from '../helpers/Component'

/* --- React Component --- */
const StorageSelector = ({ box, selector, ...props }) => {
  const [ address, setAddress ] = useState(props.address)
  const [ space, setSpace ] = useState(props.space)
  const [ selection, setSelection ] = useState()
  const [ dispatched, setDispatched ] = useState(false)

/**
   * @function AddressChangeEffect
   * @description IF proper conditions are met request space.
   */
  useEffect( () => { 
    setAddress(props.address)
  }, [props.address])

  /**
   * @function GetSpaceEffect
   * @description IF proper conditions are met request space.
   */
  const GetSpaceEffect = () => useEffect( () => {
    if(isAddress(address) && space && !dispatched) {
      box.getSpace({address, space})
      setDispatched(true)
    }
  }, [address, space, dispatched])

  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */
  const SetSelectionEffect = ()=> useEffect(() => { 
    setSelection(dot(box).get(`@.${address}.spaces.${space}.${selector}`).value())
  }, [dot(box).get(`@.${address}.spaces.${space}.${selector}`).value()])

  /**
   * @function SetSelectionOnceEffect
   * @description Read data from state storage once.
   */
  const SetSelectionOnceEffect = ()=> useEffect(() => { 
    if(!selection)
      setSelection(dot(box).get(`@.${address}.spaces.${space}.${selector}`).value())
  }, [selection, dot(box).get(`@.${address}.spaces.${space}.${selector}`).value()])

    /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */
  const LoadGlobalConfigurationEffect = () => useEffect( () => { 
    if(!space && box.config.cms.space) {
      // setSpace(box.config.cms.space)
    }
    if(!address && box.config.cms.address) {
      // setAddress(box.config.cms.address)
    }
  }, [space, address])



  /* --- Init Effects ---*/
  if(props.isGlobalConfig) LoadGlobalConfigurationEffect()
  if(props.canRequestData) GetSpaceEffect()
  if(props.isRefresh) SetSelectionEffect()
  if(!props.isRefresh) SetSelectionOnceEffect()
  
  /* --- Return Component ---*/
  return (
  !selection ? props.isDebug ? `for @.${address}.spaces.${space}.${selector}` : null
  : <Component
    delta={props.delta}
    data={selection}
    pass={{
      styled: props.styled,
      ...props.pass,
    }}
    objectToArray={props.objectToArray}
    component={props.component}
  />
)}

StorageSelector.defaultProps = {
  canRequestData: true,
  component: () => null,
  isGlobalConfig: false,
  isRefresh: true,
}

StorageSelector.propTypes = {
  address: PropTypes.string,
  canRequestData: PropTypes.bool,
  component: PropTypes.func.isRequired,
  isGlobalConfig: PropTypes.bool,
  isRefresh: PropTypes.bool,
  selector: PropTypes.string,
  space: PropTypes.string,
}

export default props =><BoxInject><StorageSelector {...props} /></BoxInject>
