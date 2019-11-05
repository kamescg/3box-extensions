
import { Site } from 'templates'

import {
  EnableEthereum,
  Login,
  LoginButton,
  AccessAuthentication,
  AccessProfile,
  AccessSpace,
  AccessThread,
  ThreadJoin,
  MessagePost,
  MessageDelete,
  MessageRender,
  SpaceOpen,
  StorageInsert,
  StorageDelete,
  StorageRender,
} from '3box-ui-system'


console.log(LoginButton, 'LoginButton')


// import { FormThreadPostPublish } from 'forms'

const showcase = {
  title: 'Web3 Identity. Made Easy.',
  tagline: 'Authentication, Storage and Messaging on easy mode with 3ID System.',
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

    {/* Features */}
    <Atom.Container my={5}>
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
    </Atom.Container>

    <InitProvider />
    <EnableEthereumExample />
    <AddLogin />
    <AccessProfileExample />
    <AccessSpaceExample />
    <AccessThreadExample />
    <SpaceOpenExample />
    <ThreadJoinExample />
    <ThreadPostPublishExample />
    <ThreadPostDeleteExample />
    <StorageRenderExample />
    <StorageMergeExample />
    <StorageDeleteExample />
    <ReferenceExample />
  </Site>

export default Home


const EnableEthereumExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2}>
          <Atom.Heading md heavy>Enable Etheruem</Atom.Heading>
          <Atom.Paragraph>
            Request permissions from the environment wallet.
      </Atom.Paragraph>
          <EnableEthereum />
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
                  `import React from 'react'
import { EnableEtheruem } from '3box-ui-system'
export default props =>(
  <EnableEtheruem
    componentIsDisconnected={CustomComponent}
    componentIsLoading={CustomComponent}
    componentIsConnected={CustomComponent}
  />
)
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}
const InitProvider = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2}>
          <Atom.Heading md heavy>Initialize The Provider</Atom.Heading>
          <Atom.Paragraph>
            Add a 3Box provider to an application component hierarchy.
      </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
                  `import React from 'react'
import { BoxProvider } from '3box-ui-system'
export default props =>
<BoxProvider>
  {props.children}
</BoxProvider>`
                }
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const AddLogin = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2}>
          <Atom.Heading md heavy>Login</Atom.Heading>
          <Atom.Paragraph>
            Authentication Login Button
      </Atom.Paragraph>
          <Login />
          <br />
          <LoginButton />
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { 
  Login,
  LoginButton,
  LoginModal,
} from '3box-ui-system'
export default props => (
  <Login variants={['tag']} />
  <LoginButton 
    componentIsLoggedOut={CustomComponent}
    componentIsLoading={CustomComponent}
    componentIsLoggedIn={CustomComponent}
  />
)
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const AccessProfileExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2}>
          <Atom.Heading md heavy>Access Authentication</Atom.Heading>
          <Atom.Paragraph>
            Require authentication to display child components.
       </Atom.Paragraph>
          <AccessAuthentication>
            <Atom.Span>Authentication Is Complete. Add important task.</Atom.Span>
          </AccessAuthentication>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
 import React from 'react'
 import { AccessAuthentication } from '3box-ui-system'
 export default props =>
 <AccessAuthentication>
    <div>
      Authentication Is Complete. Add important task.
    </div>
 </AccessAuthentication>
 `}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const AccessSpaceExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2}>

          <Atom.Heading md heavy>Access Space</Atom.Heading>
          <Atom.Paragraph>
            Require opening a space to display children.
       </Atom.Paragraph>
          <AccessSpace space='web3'>
            <div>
              Logged In and Space Open
          </div>
          </AccessSpace>

        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
 import React from 'react'
 import { AccessSpace } from '3box-ui-system'
 export default props =>
 <AccessSpace space='web3'>
    <div>
      Logged In and Space Open
    </div>
 </AccessSpace>
 `}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const AccessThreadExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2}>
          <Atom.Heading md heavy>Access Thread</Atom.Heading>
          <Atom.Paragraph>
            Require joining a thread to display children.
       </Atom.Paragraph>
          <AccessThread
            space='web3'
            threadName='home'
          >
            <Atom.Span variants={['tag']}>Thread Access</Atom.Span>
          </AccessThread>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
 import React from 'react'
 import { AccessThread } from '3box-ui-system'
 export default props =>
 <AccessThread space='web3' threadName='home'>
    <div>
      Logged In, Space Open and Thread Joined
    </div>
 </AccessThread>
 `}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}



const SpaceOpenExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2}>
          <Atom.Heading md heavy>Space Open</Atom.Heading>
          <Atom.Paragraph>
            Enforce a space is opened before displaying children components.
      </Atom.Paragraph>
          <Atom.Box>
            <SpaceOpen space='web3' />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { SpaceOpen } from '3box-ui-system'
export default props => <SpaceOpen space='3box' />
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>

  )
}

const ThreadJoinExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%' }}>
          <Atom.Heading md heavy>Thread Join</Atom.Heading>
          <Atom.Paragraph>
            Join a thread: public and members.
      </Atom.Paragraph>
          <Atom.Box>
            <ThreadJoin space='web3' threadName='comments' options={{ members: true }} />
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { Login } from '3box-ui-system'
export default props => (
  <ThreadJoin
    space='3box'
    threadName='commentThread'
    options={{members: false}}
  />
)
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}


const ThreadPostPublishExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%' }}>
          <Atom.Heading md heavy>Thread Post Publish</Atom.Heading>
          <Atom.Paragraph>
            Publish a message to a 3Box thread.
      </Atom.Paragraph>
          {/* <ThreadJoin space='3box' threadName='thread' /> */}
          <FormThreadPostPublish />
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { ThreadPostDelete } from '3box-ui-system'
export default props => (
  <ThreadPostPublish
    threadName='commentThread'
    post={
      comment: 'What if you could... Would you?'
    }
  />
)
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const ThreadPostDeleteExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%' }}>
          <Atom.Heading md heavy>Thread Post Delete</Atom.Heading>
          <Atom.Paragraph>
            Delete a message from a 3Box thread.
      </Atom.Paragraph>
          {/* <ThreadJoin space='3box' threadName='thread' /> */}
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { ThreadPostDelete } from '3box-ui-system'
export default props => (
  <ThreadPostDelete
    threadName='commentThread'
    postId='123456789'
  />
)
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const StorageRenderExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%' }}>
          <Atom.Heading md heavy>Storage Render</Atom.Heading>
          <Atom.Paragraph>
            Render data from the selected storage branch.
      </Atom.Paragraph>
          {/* <ThreadJoin space='3box' threadName='thread' /> */}
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { StorageRender } from '3box-ui-system'
export default props => (
  <StorageRender
    space='web3'
    selector='projects'
    component={CustomComponent}
    pass={{
      variation: 'large'
    }}
    data={data}
  />
)
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const StorageMergeExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%' }}>
          <Atom.Heading md heavy>Storage Merge</Atom.Heading>
          <Atom.Paragraph>
            Merge data into local and 3Box storage by passing data into components.
      </Atom.Paragraph>
          {/* <ThreadJoin space='3box' threadName='thread' /> */}
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { StorageMerge } from '3box-ui-system'
export default props => (
  <StorageMerge
    space='3box'
    index='topLevelKey'
    data={data}
  />
)
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const StorageDeleteExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%' }}>
          <Atom.Heading md heavy>Storage Delete</Atom.Heading>
          <Atom.Paragraph>
            Detel data from local and 3box storage by passing selectors into components.
      </Atom.Paragraph>
          {/* <ThreadJoin space='3box' threadName='thread' /> */}
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { StorageMerge } from '3box-ui-system'
export default props => (
  <StorageMerge
    space='3box'
    index='topLevelKey'
    data={data}
  />
)
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>

  )
}


const ReferenceExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%' }}>
          <Atom.Heading md heavy>Reference Lookup</Atom.Heading>
          <Atom.Paragraph>
            Convert a thread reference list to a rendered data list.
       </Atom.Paragraph>
          <Atom.Paragraph xxs>
            View the the 3Box System CMS for details on creating an indexing system. Threads are used as a temporary indexing system for locating content stored across multiple decentralized identities and spaces.
       </Atom.Paragraph>
          {/* <ThreadJoin space='3box' threadName='thread' /> */}
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
 import React from 'react'
 import { Reference } from '3box-ui-system'
 export default ({ reference }) => (
   <Reference
    address={reference.address}
    space={reference.space}
    index={reference.index}
   />
 )
 `}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}