import { ThreadJoin } from '3box-ui-system'


const StorageRenderExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%', p:4 }}>
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
import { StorageRender } from '3ID-system'
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


export default StorageRenderExample