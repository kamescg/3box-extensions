/**
 * @name FooterDefault
 * @description Card Footer Default Render 
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Atom from '@horizin/design-system-atoms'

const FooterDefault = props => {

  return (
    props.imageCover
      ? <Atom.Flex width='100%' sx={{ ...props.sxHeaderDefault, ...props.sxHeader }}>
        <Atom.BackgroundImage opacity={.3} src={props.imageCover} />
      </Atom.Flex>
      : null
  )
}

export default FooterDefault