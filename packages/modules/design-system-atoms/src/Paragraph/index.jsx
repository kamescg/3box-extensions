/** @jsx jsx */
import { jsx } from 'theme-ui'
import { 
  useFontSizeEffect,
  useFontWeightEffect,
} from '../effects'

export default ({ as, sx, children, ...props }) => {
  const size = useFontSizeEffect(props)
  const weight = useFontWeightEffect(props)

  return (
    <p
      sx={{
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