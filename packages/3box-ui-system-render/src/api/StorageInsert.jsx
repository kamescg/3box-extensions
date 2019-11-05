import React, { useEffect } from 'react';
import { BoxInject } from '3box-ui-state'

const StorageInsert = ({ box, ...props }) => {
  useEffect(() => {
    if (props.space && props.index && props.delta && props.data) {
      box.insert({
        address: props.address,
        space: props.space,
        access: 'public',
        index: props.index,
        key: props.delta,
        value: props.data,
      })
    }
  }, [props.data])

  return null
}

StorageInsert.defaultProps = {

}

StorageInsert.propTypes = {

}

export default props =><BoxInject><StorageInsert {...props} /></BoxInject>
