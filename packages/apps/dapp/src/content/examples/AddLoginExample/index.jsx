import { Login, LoginButton } from '3box-ui-system'

const AddLoginExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
          <Atom.Heading md heavy>Login</Atom.Heading>
          <Atom.Paragraph>
            Authentication Login Button
      </Atom.Paragraph>
          <Login />
          <br />
          <LoginButton />
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { 
  Login,
  LoginButton,
  LoginModal,
} from '3ID-system'
export default props => (
  <Login variants={['tag']} />
  <LoginButton 
    componentIsLoggedOut={CustomComponent}
    componentIsLoading={CustomComponent}
    componentIsLoggedIn={CustomComponent}
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


export default AddLoginExample