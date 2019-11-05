import base from './theme.base'
import colors from './theme.colors'
import components from './theme.components'
import effects from './theme.effects'
import images from './theme.images'
import style from './theme.style'
import shadows from './theme.shadows'
import regions from './theme.regions'
import text from './theme.text'
import positioning from './theme.positioning'

export default {
  ...base,
  ...colors,
  ...components,
  styles: style,
  images: images,
  effects: effects,
  shadows: shadows,
  regions: regions,
  layout: positioning,
  text: text,
  // App style
}

// example base theme from @theme-ui/presets
const heading = {
  fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
  lineHeight: 'normal',
  fontWeight: 'normal',
}