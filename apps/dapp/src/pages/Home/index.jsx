
import { Site } from 'templates'
import {
  AccessProfileExample,
  AccessSpaceExample,
  AccessThreadExample,
  AddLoginExample,
  EnableEthereumExample,
  InitProviderExample,
  SpaceOpenExample,
  StorageDeleteExample,
  StorageMergeExample,
  StorageProfileSetExample,
  ThreadJoinExample,
  ThreadPostDeleteExample,
  ThreadPostPublishExample
} from 'content/examples'

import { Card } from '@horizin/design-system-atoms'
const showcase = {
  title: 'Web3 Identity Made Easy',
  tagline: 'Compose Authentication, Storage and Messaging features together via 3Box Extensions.',
}

/* --- Component --- */
const Home = props =>
  <Site sx={{ bg: 'paper', color: 'text' }} sxMain={{ alignItems: 'center', justifyContent: 'center' }}>
    <Molecule.Card
      layout='showcase'
      variants={['large', 'centered']}
      sx={{
        p: 3,
        py: 4,
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
    <a href='https://github.com/kamescg/3box-extensions'>
      <Atom.Span variants={['tag']} effects={['white']}>Github</Atom.Span>
    </a>
    <Atom.Container maxWidth={980} sx={{ my: 5 }}>
      <ModuleFeatured
        title='3Box UI State'
        content='The 3Box UI State library utilizes the latest updates in React: Context, Hooks and Effects. Providing a lighweight state management layer to handle core 3Box interactions. Easily request data and listen to global state from any application.'
        image='https://image.flaticon.com/icons/svg/390/390566.svg'
        sx={{
          my: 3
        }}
      />
      <ModuleFeatured
        title='3Box UI System'
        content='The 3Box UI State library helps frontend developers easily start integrating core 3Box decentralized identity features: authentication, storage and messaging. Start adding login buttons, access control, storaging merging, thread listening, and more in just a couple of minutes'
        image='https://image.flaticon.com/icons/svg/180/180100.svg'
        sx={{
          my: 3
        }}
      />
      <ModuleFeatured
        title='3Box UI System Render'
        content='The 3Box UI State library helps developers predictably fetch data from 3Box profiles, spaces and threads and pass that data into render components. Easily render lists, items and mutate data structures without worrying about minor React render details (element, component, factory, etc...). '
        image='https://image.flaticon.com/icons/svg/904/904905.svg'
        sx={{
          my: 3
        }}
      />

    </Atom.Container>

    <Atom.Container>
      <Atom.Heading giga heavy sx={{textAlign: 'center', py: 3}} >Setup</Atom.Heading>
      <InitProviderExample />
      <EnableEthereumExample />

      <Atom.Heading giga heavy sx={{textAlign: 'center', py: 3}} >Authenticate</Atom.Heading>
      <AddLoginExample />
      <SpaceOpenExample />
      <ThreadJoinExample />

      <Atom.Heading giga heavy sx={{textAlign: 'center', py: 3}} >Access Control</Atom.Heading>
      <AccessProfileExample />
      <AccessSpaceExample />
      <AccessThreadExample />

      <Atom.Heading giga heavy sx={{textAlign: 'center', py: 3}} >Storage</Atom.Heading>
      <StorageProfileSetExample />
      <StorageMergeExample />
      <StorageDeleteExample />

      <Atom.Heading giga heavy sx={{textAlign: 'center', py: 3}} >Messaging</Atom.Heading>
      <ThreadPostPublishExample />
      <ThreadPostDeleteExample />

      <Atom.Span variants={['tag']} effects={['white']}>Rapidly buidl Decentralized Applications</Atom.Span>
    </Atom.Container>


  </Site>

export default Home


const ModuleFeatured = props => {

  return (
    <Atom.Flex variants={['card']} sx={props.sx} >
      <Atom.Flex center column sx={{ flex: 2 }} >
        <Atom.Image src={props.image} sx={{ maxWidth: 80 }} />
      </Atom.Flex>
      <Atom.Flex column sx={{ flex: 6 }} >
        <Atom.Heading xl heavy>{props.title}</Atom.Heading>
        <Atom.Paragraph>
          {props.content}
        </Atom.Paragraph>
      </Atom.Flex>
    </Atom.Flex>
  )
}




