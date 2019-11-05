/** @jsx jsx */
import { jsx } from 'theme-ui'

export const BackgroundImage = ({ sx,src, opacity, ratio, children, ...props }) =>
  <div sx={{
    variant: 'layout.fill',
    position: 'absolute',
    overflow: 'hidden',
    opacity: opacity,
    zIndex: 0,
    ...sx,
  }}>
    <div
      sx={{
        variant: 'layout.fill',
        paddingBottom: ((ratio || 3 / 4) * 100) + '%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${src})`,
        position: 'absolute',
        zIndex: 0,
      }} />
  </div>
  