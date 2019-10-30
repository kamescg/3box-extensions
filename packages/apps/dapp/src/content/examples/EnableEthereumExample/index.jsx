import {
  EnableEthereum,
} from '3box-ui-system'


const EnableEthereumExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
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

export default EnableEthereumExample