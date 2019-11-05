/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxInject } from '3box-ui-state'
import { BoxThreadPostDelete } from '@kames/3box-system/dist';

/* --- Local Dependencies --- */
import { isAddress } from '../utilities'
import Component from './Component'

/* --- React Component --- */
const BoxSelector = ({ box, children, ...props }) => {
  const [ data, setData ] = useState()
  const [ address, setAddress ] = useState(props.message.data)
  const [ selection, setSelection ] = useState()
  const [ dispatched, setDispatched ] = useState()
  /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */

   /**
   * @function GetSpaceEffect
   * @description IF proper conditions are met request space.
   */
  const GetSpaceEffect = () => useEffect( () => { 
    if(isAddress(address) && !dispatched) {
      box.getProfile(address)
      setDispatched(true)
    }
  }, [address, dispatched])

  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */
  const SetSelectionEffect = ()=> useEffect(() => { 
    if(address) {
      const profile = dot(box).get(`data.profiles.${address}`).value()
      setData(profile)
    }
  }, [dot(box).get(`data.profiles.${address}`).value()])

  /* --- Init Effects ---*/
  if(props.canRequestData) GetSpaceEffect()
  if(props.isRefresh) SetSelectionEffect()
  
  return !data ? null : 
  <Component
    selection={data}
    pass={{
      ...props.pass,
      styled:props.styled,
      key: props.postId,
      threadName: props.threadName, 
      postId: props.postId,
    }}
    component={props.component}
  />
}

BoxSelector.defaultProps = {
  canRequestData: true,
  isGlobalConfig: true,
  isRefresh: true,
}

BoxSelector.propTypes = {
  address: PropTypes.string,
  canRequestData: PropTypes.bool,
  component: PropTypes.func.isRequired,
  isGlobalConfig: PropTypes.bool,
  isRefresh: PropTypes.bool,
  selector: PropTypes.string,
  space: PropTypes.string,
}

export default props =>
<BoxInject>
  <BoxSelector {...props} />
</BoxInject>
