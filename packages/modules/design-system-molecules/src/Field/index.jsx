/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { useInputEffect } from '../effects'

const internalLabel = [
  'radio',
  'checkbox'
]
/* --- Component --- */
const Field = ({ as , sx, error, errors, register, validation, children, ...props }) => {
  const style = useInputEffect(props)

  return (
    !register ? null :
        <div sx={{...props.sxWrapper}}>
          {
            !internalLabel.includes(props.type) && props.label &&
            <Styled.div as='label' sx={{display: 'block', my:1, ...props.sxLabel}} >{props.label}</Styled.div>
          }
          <Styled.div
              as={as}
              ref={register({...validation})}
              label={props.label}
              type={props.type}
              {...props}
              sx={{
                ...sx,
                ...style
              }}
              children={children}
            />
            {
              internalLabel.includes(props.type) && props.label &&
              <Styled.div xs as='label' my='5px' sx={{mt: 3, ...props.sxLabel}} >{props.label}</Styled.div>
            }
          {/* {
            errors[props.name] && errors[props.name].message && 
              <Error floating name={props.name} error={error} className="input-error">
                {errors[props.name].message}
              </Error>
          } */}
        </div>
  )
}

Field.defaultProps ={
  as: 'input'
}

export default Field