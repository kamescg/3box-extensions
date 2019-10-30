/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { BoxInject } from '3box-ui-state'


/* --- React Component --- */
const BoxAccess = ({ box, level, ...props }) => {
    const [ isSet, setStatus ] = useState()
  
  /**
   * @function BoxGetSpace
   * @description Get Static Space Data
   */
  useEffect(() => {
    let read
    if(props.space) {
      read = idx(box, _=>_.spaces[props.space][props.access][props.id])
      if(read) setStatus(true)
    } else {
      read = idx(box, _=>_[props.access][props.id])
      if(read) setStatus(true)
    }
  }, [box.public, box.spaces])

  return (
    <>
      {
        isSet && props.children
      }      
    </>
)}

BoxAccess.defaultProps = {

}

BoxAccess.propTypes = {
  space: PropTypes.string.isRequired,
  threadName: PropTypes.string,
  level: PropTypes.string
}

export default props =>
<BoxInject>
  <BoxAccess {...props} />
</BoxInject>
