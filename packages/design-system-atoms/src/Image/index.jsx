/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ alt, sx, src, ...props }) =>
<img
  alt={alt}
  sx={{
    ...sx,
    ...props
  }}
  src={src}
/>