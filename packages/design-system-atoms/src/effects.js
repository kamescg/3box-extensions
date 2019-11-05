/* eslint-disable react-hooks/exhaustive-deps */
import idx from 'idx'
import { ThemeContext } from '@emotion/core'
import { useContext, useState, useEffect } from 'react'

/**
 * @function useBoxBaseStyleEffect
 * @description Manage general box, flex and other layout commands.
 * @param {*} props 
 */
export const useBoxBaseStyleEffect = (props) => {
  const [ style, setStyle ] = useState({})
  let defaults = {
    bg: 'white', 
    border: '1px solid #e0e0e0',
    boxShadow: 0,
    borderRadius: 4,
    p: 3
  }

  useEffect( () => { 
    let tag = {...style}
    if (props.variants && props.variants.includes('card')) {
      Object.assign(tag, defaults);

      if(props.effects) {
        if(props.effects.includes('white'))
          Object.assign(tag, {
            bg: 'white',
            border: '1px solid #e0e0e0',
            color: '#000'
          });
        if(props.effects.includes('blue'))
          Object.assign(tag, {
            bg: 'blue',
            border: '1px solid #e0e0e0',
            color: '#FFF'
          });
        if(props.effects.includes('sm'))
          Object.assign(tag, {
            fontSize: 0,
            px: 2,
            py: 1
          });
        if(props.effects.includes('lg'))
          Object.assign(tag, {
            fontSize: 1,
            px: 3,
            py: 2
          });
        }

      }

      if(props.effects) {
        if(props.effects.includes('pointer'))
          Object.assign(tag, {
            cursor: 'pointer',
          });
        if(props.effects.includes('sm'))
          Object.assign(tag, {
            fontSize: 0,
            px: 2,
            py: 1
          });
        if(props.effects.includes('lg'))
          Object.assign(tag, {
            fontSize: 1,
            px: 3,
            py: 2
          });
        }

      setStyle(tag)
  }, [props.variants])

return style

}

/**
 * @function useGradientEffect
 * @description Manage general box, flex and other layout commands.
 * @param {*} props 
 */
export const useGradientEffect = (props) => {
  const theme = useContext(ThemeContext)
  const [ gradient, setGradient ] = useState()
  useEffect( () => { 
    if(props.gradient)
    setGradient(`linear-gradient(180deg , ${idx(theme, _ => _.gradients[props.gradient])})`)
  }, [props.gradient])

return gradient

}

/**
 * @function useStylesEffect
 * @description Manage general box, flex and other layout commands.
 * @param {*} props 
 */
export const useStylesEffect = (props) => {
  const theme = useContext(ThemeContext)
  const [ styled, setStyled ] = useState()
  const [ gradient, setGradient ] = useState()
  
useEffect( () => { 
  if(props.gradient)
  setGradient(`linear-gradient(180deg , ${idx(theme, _ => _.gradient[props.gradient])})`)
}, [props.gradient])

useEffect( () => {
  if(gradient)
    setStyled({
      ...styled,
      backgroundImage: gradient
    })
}, [gradient])

return styled

}

/**
 * @function useFontSizeEffect
 * @description Manage general box, flex and other layout commands.
 * @param {*} props 
 */
export const useFontSizeEffect = (props) => {
  const [ size, setStyled ] = useState(1)

  useEffect( () => { 
    if(props.xxs)
      setStyled(0)
    if(props.xs)
      setStyled(1)
    if(props.sm)
      setStyled(2)
    if(props.md)
      setStyled(3)
    if(props.lg)
      setStyled(4)
    if(props.xl)
      setStyled(5)
    if(props.xxl)
      setStyled(6)
    if(props.giga)
      setStyled(6)
  },[(props.xxs || props.xs || props.sm || props.md || props.lg || props.xxl || props.giga)])

  return size
}

/**
 * @function useTagEffect
 * @description Font Weight Shorthand
 * @param {*} props 
 */
export const useTagEffect = (props) => {
  const [ style, setStyle ] = useState({})
  let defaults = {borderRadius: 20,p: 2, px: 3}

  useEffect( () => { 
    if (props.variants && props.variants.includes('tag')) {
      let tag = {...style}
      Object.assign(tag, defaults);

      if(props.effects) {
        if(props.effects.includes('white'))
          Object.assign(tag, {
            bg: 'white',
            border: '1px solid #e0e0e0',
            color: '#000'
          });
        if(props.effects.includes('blue'))
          Object.assign(tag, {
            bg: 'blue',
            border: '1px solid #e0e0e0',
            color: '#FFF'
          });


        if(props.effects.includes('pointer'))
          Object.assign(tag, {
            cursor: 'pointer',
          });
        if(props.effects.includes('sm'))
          Object.assign(tag, {
            fontSize: 0,
            px: 2,
            py: 1
          });
        if(props.effects.includes('lg'))
          Object.assign(tag, {
            fontSize: 1,
            px: 3,
            py: 2
          });

      }


      setStyle(tag)
    }
  }, [props.variants])


  // useEffect( () => { 
  //   if(props.tag) {
  //     let shadow = {...tag}
  //     let defaults = {borderRadius: 20,p: 2}

  //     const palette = {
  //       white: {bg: 'white',color: '#000'},
  //       blue: {bg: 'blue',color: '#FFF'}
  //     }
  //     Object.assign(shadow, defaults)
  //     Object.assign(shadow, palette[props.tag])
  //     setTag(shadow)
  //   }
  // }, [props.tag])

  return style
}
/**
 * @function useFlexEffect
 * @description Font Weight Shorthand
 * @param {*} props 
 */
export const useFlexEffect = (props) => {
const [ flexed, setStyled ] = useState()

  useEffect( () => {
    let shadow = {}
    if(props.center)
      shadow = {
        ...shadow,
        alignItems: 'center',
        justifyContent: 'center'
      }
    if(props.column)
      shadow = {
        ...shadow,
        flexDirection: 'column',
      }
    if(props.alignCenter)
      shadow = {
        ...shadow,
        alignItems: 'center',
      }
    if(props.between)
      shadow = {
        ...shadow,
        justifyContent: 'space-between',
      }
    if(props.evenly)
      shadow = {
        ...shadow,
        justifyContent: 'space-evenly',
      }
      setStyled(shadow)
  },[(props.center || props.column || props.alignCenter)])

  return flexed
}


/**
 * @function useFontWeightEffect
 * @description Font Weight Shorthand
 * @param {*} props 
 */
export const useFontWeightEffect = (props) => {
const [ weight, setStyled ] = useState(400)

  useEffect( () => { 
    if(props.thin)
      setStyled(300)
    if(props.normal)
      setStyled(500)
    if(props.bold)
      setStyled(700)
    if(props.heavy)
      setStyled(800)
  },[(props.thin || props.normal || props.bold || props.heavy)])

  return weight
}

/**
 * @function useLocationEffect
 * @description Font Weight Shorthand
 * @param {*} props 
 */
export const useLocationEffect = (props) => {
const [ location, setStyled ] = useState(1)

  useEffect( () => { 
    if(props.topLeft)
      setStyled({
        top: 0,
        left: 0
      })
    if(props.topRight)
      setStyled({
        top: 0,
        right: 0
      })
    if(props.bottomRight)
      setStyled({
        bottom: 0,
        right: 0
      })
    if(props.bottomLeft)
      setStyled({
        bottom: 0,
        right: 0
      })
    if(props.fillContainer)
      setStyled({
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
      })

  },[(props.topLeft || props.topRight || props.bottomLeft || props.bottomRight)])

  return location
}