import React from 'react'
import Box from './Box'

export const Span = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    __effectKey="common"
    __variantsKey="effects.common" 
    __css={{
      display: 'inline-block',
      fontSize: 'inherit',
      fontWeight: 'inherit',
    }}
  />
))
