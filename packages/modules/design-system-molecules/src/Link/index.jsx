/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from '@reach/router'

import {
  useFontSizeEffect,
  useFontWeightEffect,
  useTagEffect
} from '../effects'


export default ({sx, ...props}) => {
  const size = useFontSizeEffect(props)
  const weight = useFontWeightEffect(props)
  const tag = useTagEffect(props)

  return (
    <Link
      sx={{
        ...tag,
        ...size,
        ...weight,
        ...sx,
      }}
      {...props}
    />
  )
}