/**
 * @name FooterDefault
 * @description Card Footer Default Render 
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Blockquote, Container, BackgroundGradient, BackgroundImage, Flex, Heading, Span} from '@horizin/design-system-atoms'

const FooterDefault = props => {

  return (
    props.imageCover
      ? <Flex width='100%' sx={{ ...props.sxHeaderDefault, ...props.sxHeader }}>
        <BackgroundImage opacity={.3} src={props.imageCover} />
      </Flex>
      : null
  )
}

export default FooterDefault