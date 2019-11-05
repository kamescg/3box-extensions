import { AccessThread } from '3box-ui-system'
import { CodeCard } from '@horizin/design-system-molecules'

export default () =>
<CodeCard
  title='Access Thread'
  summary='Require joining a thread to display children.'
  example={<Example />}
  code={CodeExampleString}
/>

const Example = () =>
<AccessThread>
  <Atom.Span tag>Thread Join Complete</Atom.Span>
</AccessThread>

const CodeExampleString = (
`import React from 'react'
import { AccessThread } from '3box-ui-system'
export default props =>
<AccessThread space='web3' threadName='comments' >
  <Atom.Span tag>Thread Join Complete</Atom.Span>
</AccessThread>
`
)