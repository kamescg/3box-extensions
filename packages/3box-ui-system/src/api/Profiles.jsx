/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxInject } from '3box-ui-state'

/* --- Local2 Dependencies --- */
import Component from '../helpers/Component'

/* --- React Component --- */
const ProfileSelector = ({ box, selector, ...props }) => {
  /* --- Iternal State --- */
  const [ selection, setSelection ] = useState()
  const [ dispatched, setDispatched ] = useState()

  /* --- Passed State --- */
  const [ address, setAddress ] = useState(props.address)

  /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */
  const LoadGlobalConfigurationEffect = () => useEffect( () => { 

  }, [address])

  /**
   * @function GetProfileEffect
   * @description IF proper conditions are met request space.
   */
  const GetProfileEffect = () => useEffect( () => { 
    if(address && !dispatched) {
      box.getProfile(address)
      setDispatched(true)
    }
  }, [address, dispatched])

  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */
  const SetSelectionEffect = ()=> useEffect(() => { 
    setSelection(dot(box).get(`data.profiles.${address}`).value())
  }, [dot(box).get(`data.profiles.${address}`).value()])

  /* --- Init Effects ---*/
  if(props.isGlobalConfig) LoadGlobalConfigurationEffect()
  if(props.canRequestData) GetProfileEffect()
  if(props.isRefresh) SetSelectionEffect()
  
  /* --- Return Component ---*/
  return <Component
    data={selection}
    pass={props.pass}
    component={props.component}
  />
}

ProfileSelector.defaultProps = {
  canRequestData: true,
  component: () => null,
  isGlobalConfig: true,
  isRefresh: true,
}

ProfileSelector.propTypes = {
  address: PropTypes.string,
  canRequestData: PropTypes.bool,
  component: PropTypes.func.isRequired,
  isGlobalConfig: PropTypes.bool,
  isRefresh: PropTypes.bool,
  selector: PropTypes.string,
}

export default props =><BoxInject><ProfileSelector {...props} /></BoxInject>
