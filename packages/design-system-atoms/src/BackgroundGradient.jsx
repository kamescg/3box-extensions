import React from 'react'
import Box from './Box'

export const BackgroundGradient = React.forwardRef(({ sx, children, ...props }, ref) => (
  <Box
    ref={ref}
    {...props}
    __effectKey="common"
    __variantsKey="effects.common" 
    __css={{
        variant: 'layout.fill',
        overflow: 'hidden',
        position: 'absolute',
        opacity: props.opacity,
    }}
  />
))
