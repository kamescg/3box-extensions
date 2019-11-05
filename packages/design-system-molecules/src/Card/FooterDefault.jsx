/**
 * @name FooterDefault
 * @description Card Footer Default Render 
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Flex, Span} from '@horizin/design-system-atoms'

const FooterDefault = props => {

  return (
    props.isFooter ?
      <Flex width='100%' sx={{ ...props.sxFooterDefault, ...props.sxFooter }}>
        <Span>Details</Span>
      </Flex>
      : null
  )
}

export default FooterDefault