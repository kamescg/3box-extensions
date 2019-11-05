/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import {
  useFontSizeEffect,
  useFontWeightEffect,
} from '../effects'

export default ({ as, sx, children, ...props }) => {
  const size = useFontSizeEffect(props)
  const weight = useFontWeightEffect(props)

  return (
    <Styled.h3
      as={as || 'h3'}
      sx={{
        fontSize: size,
        fontWeight: weight,
        mb: 2,
        zIndex: 10,
        ...sx,
        ...props,
      }}
      children={children}
    />
  )
}