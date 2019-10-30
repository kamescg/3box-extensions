/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxInject } from '3box-ui-state'

import { isAddress } from '../utilities'
import Component from './Component'
import {
  QuestCatalogItem
} from '@kames/3box-dao'

/* --- React Component --- */
const BoxSelector = ({ box, children, ...props }) => {
  const [data, setData] = useState()
  const [address, setAddress] = useState(props.address)
  const [space, setSpace] = useState(props.space)
  const [selection, setSelection] = useState()
  const [dispatched, setDispatched] = useState()
  const [missing, setMissing] = useState()
  /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */
  const LoadGlobalConfigurationEffect = () => useEffect(() => {
    if (!space && box.config.cms.space) {
      setSpace(box.config.cms.space)
    }
    if (!address && box.config.cms.address) {
      setAddress(box.config.cms.address)
    }
  }, [space, address])

  /**
  * @function GetSpaceEffect
  * @description IF proper conditions are met request space.
  */
  const GetSpaceEffect = () => useEffect(() => {
    if (isAddress(address) && space && !dispatched) {
      box.getSpace({ address, space })
      setDispatched(true)
    }
  }, [address, space, dispatched])

  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */
  const SetSelectionEffect = () => useEffect(() => {
    if (box && props.message && props.message.data) {
      let list, item
      switch (props.message.meta.parent_type) {
        case 'array':
          list = dot(box).get(`data.spaces.${props.space}.${props.access}.${props.index}`).value()
          if (list && list.length > 0) {
            item = list.filter(i => i.alias === props.message.data)
            if (item[0]) setData(item[0])
            else setMissing(true)
          }
          break;
        case 'object':
          item = dot(box).get(`data.spaces.${props.meta.space}.${props.meta.access}.${props.meta.index}`).value()
          if (item) setSelection(item)
          else setMissing(true)
          break;
        default:
          break;
      }

    }
  }, [dot(box).get(`data.spaces.${props.space}`).value()])

  /* --- Init Effects ---*/
  if (props.isGlobalConfig) LoadGlobalConfigurationEffect()
  if (props.canRequestData) GetSpaceEffect()
  if (props.isRefresh) SetSelectionEffect()

  return !data ? null : <Component
    data={data}
    component={props.component}
    pass={props.pass}
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
