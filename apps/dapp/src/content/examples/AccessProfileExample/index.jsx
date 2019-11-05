import { AccessAuthentication } from '3box-ui-system'
import { CodeCard } from '@horizin/design-system-molecules'

export default () =>
<CodeCard
  title='Access Authenticaiton'
  summary='Require authentication to display child components.'
  example={<Example />}
  code={CodeExampleString}
/>

const Example = () =>
<AccessAuthentication>
  <Atom.Span tag>Authentication Complete</Atom.Span>
</AccessAuthentication>

const CodeExampleString = (
`import React from 'react'
import { AccessAuthentication } from '3box-ui-system'
export default props =>
<AccessAuthentication>
  <Atom.Span tag>Authentication Complete</Atom.Span>
</AccessAuthentication>
`
)