import React from 'react'
import Box from './Box'

export const Flex = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    __effectKey="common"
    __variantsKey="effects.common" 
    __css={{
      display: 'flex',
    }}
  />
))
