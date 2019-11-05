/* --- Global Dependencies --- */
import React from 'react'
import { utils } from 'ethers'
import PropTypes from 'prop-types'
import uuid from 'uuid'

const Component  = ({ component, pass, styled, ...props }) => {
  const Component = component
  return (
  props.data || props.forceRender
  
  // Render Array List
  ? Array.isArray(props.data) 
    ? props.data.map( (item, index) => {
      return (
      ! React.isValidElement(component)
        ? React.createElement(component, {
            key: utils.id(JSON.stringify(item)),
            ...item, ...pass, ...styled 
          })
        : React.cloneElement(component, {
            key: index,
            ...item, ...pass, ...styled 
          })
      )})
  // Render Object List
    : props.objectToArray
    ? Object.keys(props.data).map( itemKey => (
      ! React.isValidElement(component)
        ? React.createElement(component, {
          key: itemKey,
          delta: itemKey,
          data:props.data[itemKey],
          ...props.data[itemKey],
          ...pass,
          ...styled 
        })
        : React.cloneElement(component, {
          key: itemKey,
          delta: itemKey,
          data:props.data[itemKey],
          ...props.data[itemKey],
          ...pass,
          ...styled 
        })
      ))
  // Render Object/String
    : React.isValidElement(component)
      ? React.createElement(component, {
          key: delta,
          delta: props.delta,
        ...props.data,
        ...pass,
        ...styled,
      })
      : <Component delta={props.delta} {...props.data} {...styled} {...pass}/>
  : null 
)}

Component.defaultProps = {
  component: () => null, // Component to render.
  data: undefined, // Props for rendered component.
  forceRender: false, // Ignore empty data prop
  objectToArray: false, // Object.values(data)
  pass: undefined, // Pass props to component.
  styled: undefined, // Style component.
}

Component.propTypes = {
  component: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  forceRender: PropTypes.bool,
  objectToArray: PropTypes.bool,
  pass: PropTypes.object,
  styled: PropTypes.object,
}


export default Component