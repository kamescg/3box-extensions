import React from 'react'
import Box from './Box'

export const Container = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    __effectKey="common"
    __variantsKey="effects.common" 
    __css={{
      mx: 'auto',
      maxWidth: ['80%', '80%', 780, 1080],
      width: '100%',
    }}
    {...props}
  />
))
