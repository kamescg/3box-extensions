
import { Site } from 'templates'

const showcase = {
  title: 'Get Setup.',
  tagline: 'Installing 3Box UI System and Plugin Libraries.',
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


    <Install3Box />
    <Install3BoxUISystem />
    <Atom.Heading xxl heavy>Plugin Systems</Atom.Heading>
    <Atom.Paragraph>
      Extend 3Box UI System with unique Plugin Systems
    </Atom.Paragraph>
    <PluginCMS />
    <PluginProfiles />
    <PluginChatroom />

  </Site>

export default Home


const Install3Box = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
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
$ yarn add 3box`}
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
        <Atom.Flex column flex={2} sx={{p: 4}}>
          <Atom.Heading md heavy m={0}>3Box UI System</Atom.Heading>
          <Atom.Paragraph m={0}>
            Easyil add 3Box to any React Application
      </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ borderRadius: 7, boxShadow: 1, p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
`$ npm install 3id-system
$ yarn add 3id-system`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const PluginCMS = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
          <Atom.Heading md heavy m={0}>3Box UI System CMS</Atom.Heading>
          <Atom.Paragraph m={0}>
            Add a lightweight, loosely typed content management sytem to any decentralized identity.
      </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ borderRadius: 7, boxShadow: 1, p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
`$ npm install 3id-system-cms
$ yarn add 3id-system-cms`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const PluginProfiles = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
          <Atom.Heading md heavy m={0}>3Box UI System Profiles</Atom.Heading>
          <Atom.Paragraph m={0}>
            Add 3Box UI System Profile components to any application.
      </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ borderRadius: 7, boxShadow: 1, p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
`$ npm install 3id-system-profiles
$ yarn add 3id-system-profiles`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}


const PluginChatroom = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
          <Atom.Heading md heavy m={0}>3Box UI System Chatroom</Atom.Heading>
          <Atom.Paragraph m={0}>
            Add 3Box UI System Chatrooms (powered by Ghost Threads) to any React application.
      </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ borderRadius: 7, boxShadow: 1, p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
`$ npm install 3id-system-profiles
$ yarn add 3id-system-profiles`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

