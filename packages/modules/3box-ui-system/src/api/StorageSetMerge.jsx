/**
 * @name StorageSetMerge
 * @author kames
 * @version 0.0.1
 * @description Storage set merge. Merge objects with Object.assign method. Concat items to array.
 */
import React, { useEffect, useState } from 'react';
import { BoxInject } from '3box-ui-state'
import { useStorageSetStatusEffect} from './effects'

/* --- Component --- */
const StorageSetMerge = ({ box, ...props }) => {
  const [ delta, setDelta ] = useState()
  const [ value, setValue ] = useState()
  const storageSet = useStorageSetStatusEffect(box, props)


  /**
   * @name assignMergeTypeEffect
   * @description Dispatch a setMerge request.
   * If
   *  1. No unique delta identifier is passed.
   *  2. Delta creation IS NOT requested.
   * Effect
   *  1. Wrap incoming value as array.
   *  2. Required for dot.merge method to infer type.
   */
  useEffect( () => { 
    if(!props.delta && !props.deltaCreate) {
      setValue([props.value])
    } else if(!props.delta && props.deltaCreate) {
      setDelta(Date.now())
      setValue(props.value)
    } else {
      setDelta(props.delta)
      setValue(props.value)
    }
  }, [props.value])

  /**
   * @name triggerOnSetCallbackEffect
   * @description Pass storage set status to parent via callback.
   * @todo Change onSet to onStorageSetMerge? More explicit?
   */
  useEffect(() => {
    if (storageSet.complete) {
      if(props.onStorageSuccess) props.onStorageSuccess(storageSet.complete)
    }
  }, [storageSet.complete])

  /**
   * @name setMergeEffect
   * @description Dispatch a setMerge request.
   */
  useEffect(() => {
    if (props.index && value) {
      box.setMerge({
        access: props.access,
        key: props.index, // Top level key to set.
        delta: delta,
        value: value, // Data to set
        space: props.space // If space is passed set data in space.
      })
    }
  }, [value])

  return null
}

StorageSetMerge.defaultProps = {
  access: 'public'
}

StorageSetMerge.propTypes = {

}

export default props =><BoxInject><StorageSetMerge {...props} /></BoxInject>
