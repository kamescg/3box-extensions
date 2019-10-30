import React, { useEffect } from 'react';
import { BoxInject } from '3box-ui-state'

const StorageRemove = ({ box, ...props }) => {

  useEffect(() => {
    if (props.index) {
      box.remove({
        access: props.access,
        key: props.index,
        space: props.space,
      })
    }
  }, [props.index])

  return null
}

StorageRemove.defaultProps = {
  access: 'public'
}

StorageRemove.propTypes = {

}

export default props =><BoxInject><StorageRemove {...props} /></BoxInject>
