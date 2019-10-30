/* --- Component --- */
const Home = ({ sx, ...props}) =>
<Atom.Flex center column sx={sx} position='relative'>
  <Atom.BackgroundImage opacity={1} src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' />
  <Atom.BackgroundGradient gradient='blue' opacity={.74} />
  <Atom.Container>
    <Atom.Heading giga as='h5'>
      Hello World
    </Atom.Heading>
    <Atom.Heading giga heavy >Goodbye World</Atom.Heading>
    <Atom.Blockquote sx={{m:0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula arcu urna, nec semper ligula laoreet vel. Cras pellentesque fermentum ante, sed placerat orci imperdiet quis. Fusce consectetur feugiat nisi, eu volutpat velit laoreet at. Proin fringilla, ipsum id sollicitudin auctor, odio tellus dapibus libero, ac lacinia justo metus vel nibh. Etiam vel dolor laoreet, iaculis lorem quis, tincidunt neque. Sed lacinia quam vitae feugiat pharetra. Curabitur non neque non enim elementum interdum.</Atom.Blockquote>
  </Atom.Container>
  <Atom.Fixed topRight m={3} ><Atom.Box card>
    Goodbye World
  </Atom.Box></Atom.Fixed>
</Atom.Flex>

export default Home