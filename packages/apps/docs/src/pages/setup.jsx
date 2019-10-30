
import { Site } from 'templates'

const showcase = {
  title: 'Get Setup.',
  tagline: 'Adding 3Box UI and other Libraries.',
}

/* --- Content --- */
const featureOne = {
  title: 'Authentication',
  tagline: 'Connect to Etheruem',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673590.svg',

}
const featureTwo = {
  title: 'Storage',
  tagline: 'Store Data in the Cloud',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
}
const featureThree = {
  title: 'Communication',
  tagline: 'Chat with The World',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673579.svg',
}

/* --- Component --- */
const Home = props =>
  <Site sx={{ bg: 'smoke' }} sxMain={{ alignItems: 'center', justifyContent: 'center' }}>
    <Molecule.Card
      layout='showcase'
      variants={['large', 'centered']}
      sx={{
        p: 5
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


    <Install3Box />
    <Install3BoxUISystem />
    <Install3BoxUIMobileSystem />
    <InstallProfileComponents />

  </Site>

export default Home


const Install3Box = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', boxShadow: 1, p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p:4}}>
          <Atom.Heading md heavy m={0}>Install 3Box</Atom.Heading>
          <Atom.Paragraph m={0}>
            Include 3Box as project dependency.
          </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ borderRadius: 7, boxShadow: 1, p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
`$ npm install 3box
$ yarn add 3box`
                }
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const Install3BoxUISystem = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p:4}}>
          <Atom.Heading md heavy m={0}>Install 3Box UI</Atom.Heading>
          <Atom.Paragraph m={0}>
            Add 3Box UI for Browser Applications
      </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ borderRadius: 7, boxShadow: 1, p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
                  `$ npm install 3box-ui-system
$ yarn add 3box-ui-system`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const Install3BoxUIMobileSystem = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p:4}}>
          <Atom.Heading md heavy m={0}>Install 3Box UI Mobile</Atom.Heading>
          <Atom.Paragraph m={0}>
            Add 3Box U Mobile for Smartphone Applications
      </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ borderRadius: 7, boxShadow: 1, p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
                  `$ npm install 3box-ui-mobile-system
$ yarn add 3box-ui-mobile-system`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const InstallProfileComponents = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p:4}}>
          <Atom.Heading md heavy m={0}>Install 3Box UI Profiles</Atom.Heading>
          <Atom.Paragraph m={0}>
            Add 3Box UI Profile components to create custom profile layouts.
      </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ borderRadius: 7, boxShadow: 1, p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
                  `$ npm install 3box-ui-profiles
$ yarn add 3box-ui-profiles`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

