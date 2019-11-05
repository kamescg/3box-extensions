/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  useFontSizeEffect,
  useFontWeightEffect,
} from './effects'

export const Loading =  ({ as, sx, children, ...props }) => {
  const size = useFontSizeEffect(props)
  const weight = useFontWeightEffect(props)

  return (
    <span
      sx={{
        display: 'inline-block',
        fontSize: size,
        fontWeight: weight,
        zIndex: 10,
        ...sx,
        ...props,
      }}
      children={children}
    />
  )
}