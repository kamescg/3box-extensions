/**
 * @function Reference
 * @description Consume a reference object and select data from computed address.
 */
/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxContext } from '3box-ui-state'
import Component from '../helpers/Component'

/* --- Component --- */
const Reference = ({ box, children, ...props }) => {
  /* --- State --- */
  const [data, setData] = useState(undefined)
  const validateReference = data => (data.address && data.space && data.index) || false

  /**
   * @function selectReferenceEffect
   * @description Select item from reference object
   */
  useEffect(() => {
    // Check the reference object at minimum contains location reference (space or thread) 
    if (props.message && props.message.location) {
      if (validateReference(props.message.data)) {
        const { address, space, index, delta } = props.message.data // Extract Required Data
        const selectorConstruct = `@.${address}.spaces.${space}.${index}.${delta}`
        const select = dot(box).get(selectorConstruct).value()
        if (select) setData({
          author: props.author,
          postId: props.postId,
          timestamp: props.timestamp,
          delta,
          ...select
        })
      }
    }
  }, [props.message])

  return !data
    ? null
    : <Component
      data={data}
      component={props.component}
      pass={props.pass}
    />
}

Reference.defaultProps = {
  canRequestData: true,
}

Reference.propTypes = {
  canRequestData: PropTypes.bool,
}

export default props => <BoxContext>{box => (<Reference box={box} {...props} />)}</BoxContext>
