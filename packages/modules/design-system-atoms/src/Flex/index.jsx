/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useFlexEffect } from '../effects'

export default ({ as, sx, children, ...props }) => {
  const flexed = useFlexEffect(props)

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        position: 'relative',
        zIndex: 10,
        ...flexed,
        ...sx,
        ...props
      }}
      children={children}
      {...props}
    />
  )
}