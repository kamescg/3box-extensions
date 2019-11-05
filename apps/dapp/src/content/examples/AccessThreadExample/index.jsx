import {
  AccessThread,
} from '3box-ui-system'


const AccessThreadExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
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

export default AccessThreadExample