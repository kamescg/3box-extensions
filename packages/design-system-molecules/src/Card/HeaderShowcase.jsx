/**
 * @name FooterDefault
 * @description Card Footer Default Render 
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Blockquote, Container, BackgroundGradient, BackgroundImage, Flex, Heading, Span} from '@horizin/design-system-atoms'

const FooterDefault = props => {

  return (
    <BackgroundImage ratio={.2} opacity={.3} src={props.imageCover} />
  )
}

export default FooterDefault