import { SpaceOpen } from '3box-ui-system'

const SpaceOpenExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
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
import { SpaceOpen } from '3ID-system'
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


export default SpaceOpenExample