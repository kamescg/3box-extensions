/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useEffect, useState } from 'react'
import { basic, raised } from './styles'
import { default as ButtonBox } from '../Box'
import { relative } from 'path'
const Button = ({ as, sx, children, ...props}) => {
  const [ styled, setStyled ] = useState({
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 1,
    px: 3,
    py: 2,
    outline: 'none',
    position: 'relative',
    '&:hover': {
      top: '-1px',
    }
  })
  /**
   * @name ButtonTypeEffect
   */
  useEffect( () => { 
    if(props.type) {
      switch (props.type) {
        case 'basic':
          setStyled(basic)
          break;
        case 'raised':
            setStyled(raised)
          break;
        default:
          setStyled(basic)
          break;
      }
    }
  }, [props.type])

  useEffect( () => { 
    if(props.variants.includes('button')) {
      let tag = {...styled}
      
      if(props.effects && props.effects.includes('white')) 
        Object.assign(tag, {
          bg: 'white',
          border: '1px solid #e0e0e0',
          color: '#4c4b4b',
        });
      if(props.effects && props.effects.includes('blue')) 
        Object.assign(tag, {
          bg: 'blue',
          border: '#FFF',
          color: '#FFF',
        });
      if(props.effects && props.effects.includes('green')) 
        Object.assign(tag, {
          bg: 'green',
          border: '#FFF',
          color: '#FFF',
        });

      setStyled(tag)
    }
  }, [props.variants])

  return (
    <Styled.div
      as='button'
      sx={{
        variant: props.variant,
        ...sx,
        ...styled,
      }}
      children={children}
      {...props}
    />
)}

Button.defaultProps = {
  type: 'basic',
  variants: ['button']
}

export default Button