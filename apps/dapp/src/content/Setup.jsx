
import { Site } from 'templates'

const showcase = {
  title: 'Get Setup.',
  tagline: 'Installing 3Box Extensions and Contributing.',
}

/* --- Component --- */
const Home = props =>
  <Site sx={{ bg: 'smoke' }} sxMain={{ alignItems: 'center', justifyContent: 'center' }}>
    <Molecule.Card
      layout='showcase'
      variants={['large', 'centered']}
      sx={{
        p: 3
      }}
      sxTitle={{
        fontWeight: 700
      }}
      sxTagline={{
        fontWeight: 300
      }}
      sxMain={{
        maxWidth: 980
      }}
      {...showcase}
      image={null}
    />

    <Install3BoxExtensions />
  </Site>

export default Home

const Install3BoxExtensions = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'neutral', color: 'text', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
          <Atom.Heading md heavy m={0}>3Box Extensions</Atom.Heading>
          <Atom.Paragraph m={0}>
            Project currently under rapid development.
          </Atom.Paragraph>
          <Atom.Paragraph>
            Packages will be released on NPM when ready for production.
          </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ borderRadius: 7, boxShadow: 1, p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`$ git clone git@github.com:KamesCG/3box-extensions.git`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}
