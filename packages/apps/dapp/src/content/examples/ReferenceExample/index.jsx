import { ThreadJoin } from '3box-ui-system'


const ReferenceExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%', p:4 }}>
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
 import { Reference } from '3ID-system'
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


export default ReferenceExample