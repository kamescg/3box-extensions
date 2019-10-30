/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useFontSizeEffect } from '../effects'

export default ({ as, sx, children, ...props }) => {
  const size = useFontSizeEffect(props)

  return (
    <blockquote
      sx={{
        zIndex: 10,
        fontSize: size,
        ...sx,
        ...props,
      }}
      children={children}
    />
  )
}