
import { Site } from 'templates'

/* --- Component --- */
const Home = props =>
  <Site sx={{ bg: 'smoke' }} sxMain={{ alignItems: 'center', justifyContent: 'center' }}>
    <Atom.Heading xxl heavy>Plugin Systems</Atom.Heading>
    <Atom.Paragraph>
      Extend 3Box UI System with unique Plugin Systems
    </Atom.Paragraph>
    <PluginCMS />
    <PluginProfiles />
    <PluginChatroom />
  </Site>

export default Home

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

