import React from 'react'
import Box from './Box'

export const Paragraph = React.forwardRef((props, ref) => (
  <Box
    as='p'
    ref={ref}
    {...props}
    __effectKey="common"
    __variantsKey="effects.common" 
    __css={{
      display: 'block',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      mb: 10,
    }}
  />
))
