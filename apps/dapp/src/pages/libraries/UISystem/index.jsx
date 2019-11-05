
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

const showcase = {
  title: '3Box UI System',
  tagline: 'Use 3Box to Compose together the Corners of Web3',
}

/* --- Component --- */
const Home = props =>
  <Site sx={{ bg: 'smoke' }} sxMain={{ alignItems: 'center', justifyContent: 'center' }}>
    <Molecule.Card
      layout='showcase'
      variants={['large', 'centered']}
      sx={{
        p: 3,
        py: 6,
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

    <Atom.Span variants={['tag']} effects={['white']}>Add 3Box Features in Minutes.</Atom.Span>

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

    {/* <Atom.Heading xxl heavy>Rendering</Atom.Heading>
    <Atom.Paragraph>
      Simplified Data Rendering and Content References
    </Atom.Paragraph>
    <StorageRenderExample />
    <ReferenceExample /> */}
  </Site>

export default Home




