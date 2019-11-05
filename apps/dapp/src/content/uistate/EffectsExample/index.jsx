import {
  EnableEthereum,
} from '3box-ui-system'


const EffectsExample = props => {
  return (
    <Atom.Container my={3} maxWidth={780} sx={{bg: 'white', p: 4}} >
      <Atom.Heading xxl >Context</Atom.Heading>
      <Atom.Heading md>Global Application State</Atom.Heading>
      <Atom.Paragraph>
        Curabitur dignissim nec risus nec consectetur. Aenean malesuada lorem sit amet augue aliquam, eget pretium ligula elementum. Nullam in mi eu lectus interdum dignissim non nec tortor. Vestibulum sed est purus. Aenean imperdiet mauris a pretium maximus. Donec ultricies purus quis purus sollicitudin, sed pharetra orci facilisis.
      </Atom.Paragraph>
      
      <Atom.Heading xxl >Redcuers</Atom.Heading>
      <Atom.Heading md>Predictable State Updates</Atom.Heading>
      <Atom.Paragraph>
        Curabitur dignissim nec risus nec consectetur. Aenean malesuada lorem sit amet augue aliquam, eget pretium ligula elementum. Nullam in mi eu lectus interdum dignissim non nec tortor. Vestibulum sed est purus. Aenean imperdiet mauris a pretium maximus. Donec ultricies purus quis purus sollicitudin, sed pharetra orci facilisis.
      </Atom.Paragraph>

      <Atom.Heading xxl >Effects</Atom.Heading>
      <Atom.Heading md>Control Application Data</Atom.Heading>
      <Atom.Paragraph>
        Curabitur dignissim nec risus nec consectetur. Aenean malesuada lorem sit amet augue aliquam, eget pretium ligula elementum. Nullam in mi eu lectus interdum dignissim non nec tortor. Vestibulum sed est purus. Aenean imperdiet mauris a pretium maximus. Donec ultricies purus quis purus sollicitudin, sed pharetra orci facilisis. Fusce eu eros auctor, iaculis erat id, tincidunt nunc. Suspendisse pulvinar enim auctor tellus aliquet varius. Praesent a odio ut ante faucibus consectetur ut eget neque. Donec aliquet erat vel iaculis pretium. Praesent arcu ex, pellentesque eget magna sit amet, varius malesuada odio. Praesent sit amet quam a mi volutpat auctor. Integer in aliquam risus, eu iaculis massa.
      </Atom.Paragraph>

    </Atom.Container>
  )
}

export default EffectsExample