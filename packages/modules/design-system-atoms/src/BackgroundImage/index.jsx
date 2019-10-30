/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ sx, children, ...props }) =>
  <div sx={{
    variant: 'layout.fill',
    overflow: 'hidden',
    zIndex: 0,
    ...sx,
    ...props
  }}>
    <div
      sx={{
        variant: 'layout.fill',
        paddingBottom: ((props.ratio || 3 / 4) * 100) + '%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${props.src})`
      }} />
  </div>