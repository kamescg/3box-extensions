
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
    <Atom.Span variants={['tag']} effects={['white']}>Rapidly build social decentralized applications.</Atom.Span>
    <Atom.Container maxWidth={980} sx={{ my: 5 }}>
      <ModuleFeatured
        url='/3box-ui-system-render'
        title='3Box UI State'
        content='The 3Box UI State library utilizes the latest updates in React: Context, Hooks and Effects. Providing a lighweight state management layer to handle core 3Box interactions. Easily request data and listen to global state from any application.'
        image='https://image.flaticon.com/icons/svg/390/390566.svg'
        sx={{
          my: 3
        }}
      />
      <ModuleFeatured
        url='/3box-ui-system'
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
        url='/3box-ui-system-render'
        sx={{
          my: 3
        }}
      />
      <ModuleFeatured
        title='3Box UI Profiles'
        url='/3box-ui-profiles'
        content='Coming Soon.'
        image='https://image.flaticon.com/icons/svg/1673/1673472.svg'
        sx={{
          my: 3
        }}
      />
      <ModuleFeatured
        title='3Box Content Management System'
        url='/3box-cms'
        content='Coming Soon.'
        image='https://image.flaticon.com/icons/svg/1673/1673472.svg'
        sx={{
          my: 3
        }}
      />
    </Atom.Container>

    <Atom.Container>
    <InitProviderExample />
    <EnableEthereumExample />

    <Atom.Heading xxl heavy>Authenticate</Atom.Heading>
    <Atom.Paragraph>
      Login, Open Spaces and Join Threads.
    </Atom.Paragraph>
    <AddLoginExample />
    <SpaceOpenExample />
    <ThreadJoinExample />

    <Atom.Heading xxl heavy>Access</Atom.Heading>
    <Atom.Paragraph>
      Control access to components based on authentication level.
    </Atom.Paragraph>
    <AccessProfileExample />
    <AccessSpaceExample />
    <AccessThreadExample />

    <Atom.Heading xxl heavy>Storage</Atom.Heading>
    <Atom.Paragraph>
      Manage data controlled by a 3Box decentralized identity.
    </Atom.Paragraph>
    <StorageProfileSetExample />
    <StorageMergeExample />
    <StorageDeleteExample />

    <Atom.Heading xxl heavy>Messaging</Atom.Heading>
    <Atom.Paragraph>
      Publish posts to public threads or keep it temporary with ghost threads.
    </Atom.Paragraph>
    <ThreadPostPublishExample />
    <ThreadPostDeleteExample />
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
        <Molecule.Link to={props.url}>
          <Atom.Button>Learn More</Atom.Button>
        </Molecule.Link>
      </Atom.Flex>
    </Atom.Flex>
  )
}




