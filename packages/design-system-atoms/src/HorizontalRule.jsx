
import React from 'react'
import Box from './Box'

export const HorizontalRule = React.forwardRef((props, ref) => (
  <Box
    as='hr'
    ref={ref}
    {...props}
    __effectKey="common"
    __variantsKey="effects.common" 
    __css={{
      fontWeight: 'inherit',
    }}
  />
))
