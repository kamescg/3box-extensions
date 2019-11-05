import { ThreadJoin } from '3box-ui-system'
import { CodeCard } from '@horizin/design-system-molecules'

export default () =>
<CodeCard
  title='Thread Join'
  summary='Join a thread: public and members.'
  example={<ThreadJoin space='web3' threadName='comments' options={{ members: true }} />}
  code={CodeExampleString}
/>

const CodeExampleString = (
`import React from 'react'
import { Login } from '3box-ui-system'
export default props => (
  <ThreadJoin
    space='3box'
    threadName='commentThread'
    options={{members: false}}
  />
)`
)