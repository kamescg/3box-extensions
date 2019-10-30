import { ThreadPostDelete } from '3box-ui-system'


const ThreadPostDeleteExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%', p:4 }}>
          <Atom.Heading md heavy>Thread Post Delete</Atom.Heading>
          <Atom.Paragraph>
            Delete a message from a 3Box thread.
          </Atom.Paragraph>
          <Atom.Box>
            <ThreadPostDelete space='web3' threadName='comments' postId='test' />
          </Atom.Box>
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


export default ThreadPostDeleteExample