
import { AccessSpace } from '3box-ui-system'
import { CodeCard } from '@horizin/design-system-molecules'

export default () =>
<CodeCard
  title='Access Space'
  summary='Require opening a space to display children.'
  example={<Example />}
  code={CodeExampleString}
/>

const Example = () =>
<AccessSpace space='web3'>
  <Atom.Span tag>Space Open Complete</Atom.Span>
</AccessSpace>

const CodeExampleString = (
`import React from 'react'
import { AccessAuthentication } from '3box-ui-system'
export default props =>
<AccessSpace space='web3'>
  <Atom.Span tag>Space Open Complete</Atom.Span>
</AccessSpace>
`
)