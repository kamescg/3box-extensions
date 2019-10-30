/* eslint-disable react-hooks/exhaustive-deps */
import idx from 'idx'
import { ThemeContext } from '@emotion/core'
import { useContext, useState, useEffect } from 'react'

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
    setGradient(`linear-gradient(180deg , ${idx(theme, _ => _.gradient[props.gradient])})`)
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
const [ weight, setStyled ] = useState(1)

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

  },[(props.topLeft || props.topRight || props.bottomLeft || props.bottomRight)])

  return location
}