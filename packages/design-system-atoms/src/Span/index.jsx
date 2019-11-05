/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  useBoxBaseStyleEffect,
  useFontSizeEffect,
  useFontWeightEffect,
  useTagEffect
} from '../effects'

export default ({ as, sx, children, ...props }) => {
  const box = useBoxBaseStyleEffect(props)
  const size = useFontSizeEffect(props)
  const weight = useFontWeightEffect(props)
  const tag = useTagEffect(props)


  return (
    <span
      sx={{
        display: 'inline-block',
        fontSize: size,
        fontWeight: weight,
        zIndex: 10,
        ...sx,
        ...box,
        ...tag,
      }}
      children={children}
      {...props}
    />
  )
}