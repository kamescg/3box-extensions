
import { Site } from 'templates'

import {
  AccessProfileExample, 
  AccessSpaceExample,
  AccessThreadExample,
  AddLoginExample,
  EnableEthereumExample,
  InitProviderExample,
  ReferenceExample,
  SpaceOpenExample,
  StorageDeleteExample,
  StorageMergeExample,
  StorageProfileSetExample,
  StorageRenderExample,
  ThreadJoinExample,
  ThreadPostDeleteExample,
  ThreadPostPublishExample
 } from 'content/examples'

 const showcase = {
  title: 'Web3 Identity. Made Easy.',
  tagline: 'Authentication, Storage and Messaging on easy mode with 3Box UI System.',
}

/* --- Content --- */
const featureOne = {
  title: 'Authentication',
  tagline: 'Connect to Etheruem',
  summary: 'Support social identity and basic reputation.',
  image: 'https://3box.io/static/media/Profiles.53b79a55.svg',

}
const featureTwo = {
  title: 'Storage',
  tagline: 'Store Data in the Decentralized Cloud',
  summary: 'Store user data in a private database just for your app.',
  image: 'https://3box.io/static/media/Storage.3c2f0d4f.svg',
}
const featureThree = {
  title: 'Communication',
  tagline: 'Connect with The World Around You',
  summary: 'Add decentralized chat, messaging, and commenting.',
  image: 'https://3box.io/static/media/Messaging.63339734.svg',
  
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

    {/* Features */}
    {/* <Atom.Container my={5}>
      <Atom.Flex sx={{}}>
        <Molecule.Card
          {...featureOne}
          sx={{ flex: 1, p: 3 }}
          sxImage={{ maxWidth: 55, p: 2, pr: 3 }}
        />

        <Molecule.Card
          {...featureTwo}
          sx={{ flex: 1, p: 3 }}
          sxImage={{ maxWidth: 55, p: 2, pr: 3 }}
        />

        <Molecule.Card
          {...featureThree}
          sx={{ flex: 1, p: 3 }}
          sxImage={{ maxWidth: 55, p: 2, pr: 3 }}
        />
      </Atom.Flex>
    </Atom.Container> */}

    <Atom.Span variants={['tag']} effects={['white']}>A community initiative to help enable adpotion of 3Box.</Atom.Span>

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
    <StorageProfileSetExample/>
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




