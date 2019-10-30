/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useGradientEffect } from '../effects'

export default ({ sx, children, ...props }) => {
  const gradient = useGradientEffect(props)
  return (
    <div
      sx={{
        variant: 'layout.fill',
        overflow: 'hidden',
        backgroundImage: gradient,
        opacity: props.opacity,
        ...sx,
        ...props
      }}
      children={children}
    />
  )
}
