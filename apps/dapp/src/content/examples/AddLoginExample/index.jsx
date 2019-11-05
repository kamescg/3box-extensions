import {Login} from '3box-ui-system'
import { CodeCard } from '@horizin/design-system-molecules'

export default () =>
<CodeCard
  title='Login'
  summary='Authentication Login Button'
  example={<Login />}
  code={CodeExampleString}
/>

const CodeExampleString = (
`
import React from 'react'
import { Login } from '3box-ui-system'

// Example 1
export default props => <Login />

// Example 1
export default props => <Login 
  componentIsLoggedOut={CustomComponent}
  componentIsLoading={CustomComponent}
  componentIsLoggedIn={CustomComponent}
/>
`
)