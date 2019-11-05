import { AccessSpace } from '3box-ui-system'


const AccessSpaceExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>

          <Atom.Heading md heavy>Access Space</Atom.Heading>
          <Atom.Paragraph>
            Require opening a space to display children.
       </Atom.Paragraph>
          <AccessSpace space='web3'>
            <div>
              <Atom.Span xxs variants={['tag']} effects={['white']} >a nested space <strong>web3</strong> open notification</Atom.Span>
            </div>
          </AccessSpace>

        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
`import React from 'react'
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


export default AccessSpaceExample