/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxInject } from '3box-ui-state'

/* --- React Component --- */
const BoxSelector = ({ box, children, ...props }) => {
  const [ isMissing, setMissing ] = useState(false)
  const [ selection, setSelection ] = useState()
  const selector = `data.spaces.${props.space}.${props.access}.${props.index}`

  useEffect( () => { 
    if(box && props.message && props.message.data) {
      let list, item
      switch (props.message.meta.parent_type) {
        case 'array':
          list = dot(box).get(selector).value()
          if(list.length > 0) {
            item = list.filter( i => i.alias === props.message.data)
              if(item[0]) setSelection(item[0])
              else setMissing(true)
          }
          break;
        case 'object':
          selector = `data.spaces.${props.meta.space}.${props.meta.access}.${props.meta.index}`
          item = dot(box).get(selector).value()
            if(item) setSelection(item)
            else setMissing(true)
          break;
      
        default:
          break;
      }

    }
  }, [dot(box).get(selector).value()] )

  return (
    selection 
      ? React.createElement(props.component, {
        ...selection,
        space: props.space,
        access: props.access,
        index: props.index
      })
    : null
  )
}

BoxSelector.defaultProps = {
  component: () => null,
}

BoxSelector.propTypes = {
  component: PropTypes.func,
}

export default props =>
<BoxInject>
  <BoxSelector {...props} />
</BoxInject>
