
import { useEffect, useState, useContext } from 'react'
import styled from '@emotion/styled'
import css, { get } from '@styled-system/css'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import space from '@styled-system/space'
import color from '@styled-system/color'
import { Context } from 'theme-ui'

export const useGradientEffect = (props) => {
  const theme = useContext(Context)
  const [ gradient, setGradient ] = useState()
  useEffect( () => { 
    if(props.gradient)
    setGradient(`linear-gradient(180deg , ${theme.gradients[props.gradient]}`)
  }, [props.gradient])

return gradient

}

const shouldForwardProp = createShouldForwardProp([
  ...space.propNames,
  ...color.propNames,
])

const sx = props => css(props.sx)(props.theme)
const base = props => css(props.__css)(props.theme)

const variant = ({ theme, variant, __themeKey = 'variants' }) =>
  css(get(theme, __themeKey + '.' + variant, get(theme, variant)))

const shorthand = ({ theme, ...props}) =>
  Object.keys(props).map( selector => css(get(theme, `effects.common.${selector}`)))

const variants = ({ theme, variants, __variantsKey = 'variants' }) =>
  Array.isArray(variants)
    ? variants.map(variant => css(get(theme, __variantsKey + '.' + variant, get(theme, variant))))
    : null
const variantsShorthand = ({ theme, __effectKey = 'common', ...props}) =>
  Object.keys(props).map( selector => css(get(theme, `effects.${__effectKey}.${selector}`)))
  
const gradient = ({ sx, theme, gradient, __gradientKey = 'gradients' }) => {

}

const effects = ({ theme, effects, __effectKey = 'effects' }) =>
Array.isArray(effects)
    ? effects.map(effect => css(get(theme, __effectKey + '.' + effect, get(theme, effect))))
    : null

export const Box = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
    position: 'relative'
  },
  variants,
  variant,
  effects,
  shorthand,
  variantsShorthand,
  gradient,
  space,
  color,
  base,
  sx,
  props => props.css,
)

export default Box
