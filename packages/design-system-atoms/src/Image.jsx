import React from 'react'
import Box from './Box'

export const Image = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="img"
    __themeKey="images"
    __css={{
      height: 'auto',
      maxWidth: props.maxWidth || '100%'
    }}
    {...props}
  />
))
