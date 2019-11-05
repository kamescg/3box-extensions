/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Blockquote, Container, BackgroundGradient, BackgroundImage, Flex, Heading, Span} from '@horizin/design-system-atoms'

const Showcase = ({ as, sx, children, ...props }) =>
  <>
    <Flex center column sx={sx} position='relative'>
      <BackgroundImage opacity={1} src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' />
      <BackgroundGradient gradient='blue' opacity={.74} />
      <Container>
        <Heading giga as='h5'>
          {props.title}
        </Heading>
        <Heading md heavy mb={6} >{props.tagline}</Heading>
        <Blockquote sx={{ m: 0 }}>{props.content}</Blockquote>
      </Container>
    </Flex>
  </>

export default Showcase