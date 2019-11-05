import React from 'react'
import { default as HorizontalRule } from '../Box'

export default ({ as, sx, ...props}) =>
<HorizontalRule
  as='hr'
  sx={{
    ...sx
  }}
  {...props}
/>
