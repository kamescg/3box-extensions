import { ThreadJoin } from '3box-ui-system'


const ThreadJoinExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%', p:4 }}>
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


export default ThreadJoinExample