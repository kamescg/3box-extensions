/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import {
  useBoxBaseStyleEffect,
  useGradientEffect,
  useFontSizeEffect,
} from '../effects'

const Box = ({ as, sx, children, ...props }) => {
  const box = useBoxBaseStyleEffect(props)
  const gradient = useGradientEffect(props)
  const size = useFontSizeEffect(props)

  return (
    <Styled
      as={as || 'div'}
      sx={{
        backgroundImage: gradient,
        fontSize: size,
        position: 'relative',
        zIndex: 10,
        ...box,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Styled>
  )
}

export default Box