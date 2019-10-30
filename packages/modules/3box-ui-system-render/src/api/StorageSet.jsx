/**
 * @name StorageSet
 * @author kames
 * @version 0.0.1
 * @description Storage set: public and private 3Box profiles and spaces.
 */
import React, { useEffect } from 'react';
import { BoxInject } from '3box-ui-state'
import { useStorageSetStatusEffect} from './effects'

/* --- Component --- */
const StorageSet = ({ box, ...props }) => {
  const storageSet = useStorageSetStatusEffect(box, props)

  /**
   * @name triggerOnSetCallbackEffect
   * @description Pass storage set status to parent via callback.
   * @todo Change onSet to onStorageSet? More explicit?
   */
  useEffect(() => {
    if (storageSet.complete) {
      if(props.onSet) props.onSet(storageSet.complete)
    }
  }, [storageSet.complete])

  /**
   * @name setSingleEffect
   * @description Dispatch a set request. https://docs.3box.io/api/storage#set
   */
  useEffect(() => {
    if (props.index && props.value) {
      box.setSingle({
        access: props.access,
        key: props.index, // Top level key to set.
        value: props.value, // Data to set
        space: props.space // If space is passed set data in space.
      })
    }
  }, [props.value])

  return null
}

StorageSet.defaultProps = {
  access: 'public'
}

StorageSet.propTypes = {

}

export default props =><BoxInject><StorageSet {...props} /></BoxInject>
