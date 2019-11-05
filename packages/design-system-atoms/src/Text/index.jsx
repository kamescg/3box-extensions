import React from 'react'
import { default as Text } from '../Box'

export default ({ as, sx, children,  ...props }) => 
<Text
  as={as || 'span'}
  sx={{
    ...sx,
    ...props
  }}
  {...props}
  children={children}
/>