import {
  AccessAuthentication,
} from '3box-ui-system'


const AccessProfileExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
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


export default AccessProfileExample