import React from 'react'
import { default as Container } from '../Box'

export default ({ sx, children, ...props}) =>
<Container
  sx={{
    mx: 'auto',
    maxWidth: ['80%', '80%', 780, 1080],
    width: '100%',
    ...sx,
    ...props
  }}
  children={children}
/>