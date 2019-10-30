import {
  EnableEthereum,
} from '3box-ui-system'


const InitProviderExample = props => {
  return (
    <Atom.Container my={3} maxWidth={780}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
          <Atom.Heading md heavy>Initialize The Provider</Atom.Heading>
          <Atom.Paragraph>
            Add 3Box provider to an application component hierarchy.
          </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
`import React from 'react'
import { BoxProvider } from '3box-ui-state'
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

export default InitProviderExample