/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'

/* --- React Component --- */
const BoxOpenSpace = ({ box, auto, space, styled, styledLoading, componentLoading, children }) => {
  const [ loading, setLoading ] = useState(false)

  /**
   * @function ComponentActionHandler
   * @description Handle component click event. 
   */
  const actionHandler = () => {
    if(typeof space === 'undefined') throw new Error('space undefined')
    box.openSpace(space)
    setLoading(true) 
  }

  /**
   * @function AutoEffect
   * @description Automatically connect to space without requiring use input.
   */
  useEffect(() => {
    if(!box.auth.spaces[space] && auto && typeof space !== 'undefined') {
      box.openSpace(space)
      setLoading(true)
    }
  }, [auto])

  return (
    !auto ? loading 
      ? componentLoading ? componentLoading :
        <Box fullWidth>
          <Button {...styledLoading}>Loading Space...</Button>
        </Box>
      : children ? <Span onClick={actionHandler}>{children}</Span> :
        <Box fullWidth onClick={actionHandler}>
          <Button {...styled}>open <strong> {space} </strong> space</Button>
        </Box>
    : null
  )
}

BoxOpenSpace.defaultProps = {
  threadName: undefined,
  labelLoading: 'Loading Space...',
  styled: {
    xs: true,
    fontWeight: 'normal',
    width: '100%'
  },
  styledLoading: {
    width: '100%'
  },
}

BoxOpenSpace.propTypes = {
  space: PropTypes.string.isRequired,
}

export default props =>
<BoxInject>
  <BoxOpenSpace {...props} />
</BoxInject>
