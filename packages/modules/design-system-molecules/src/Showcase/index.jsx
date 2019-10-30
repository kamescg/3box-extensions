/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Atom from '@horizin/design-system-atoms'

const Showcase = ({ as, sx, children, ...props }) =>
  <>
    <Atom.Flex center column sx={sx} position='relative'>
      <Atom.BackgroundImage opacity={1} src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' />
      <Atom.BackgroundGradient gradient='blue' opacity={.74} />
      <Atom.Container>
        <Atom.Heading giga as='h5'>
          {props.title}
        </Atom.Heading>
        <Atom.Heading md heavy mb={6} >{props.tagline}</Atom.Heading>
        <Atom.Blockquote sx={{ m: 0 }}>{props.content}</Atom.Blockquote>
      </Atom.Container>
    </Atom.Flex>
  </>

export default Showcase