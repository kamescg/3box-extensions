/**
 * @name FooterDefault
 * @description Card Footer Default Render 
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Atom from '@horizin/design-system-atoms'

const FooterDefault = props => {

  return (
    props.isFooter ?
      <Atom.Flex width='100%' sx={{ ...props.sxFooterDefault, ...props.sxFooter }}>
        <Atom.Span>Details</Atom.Span>
      </Atom.Flex>
      : null
  )
}

export default FooterDefault