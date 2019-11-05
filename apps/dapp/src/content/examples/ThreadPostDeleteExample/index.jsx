import { useState, useEffect } from 'react'
import {CodeCard} from '@horizin/design-system-molecules'
import {
  ThreadPostDelete
} from '3box-ui-system'

export default () =>
<CodeCard
  title='Thread Post Delete'
  summary='Delete a message from a 3Box thread.'
  example={<ThreadPostDelete space='web3' threadName='comments' postId='test' />}
  code={CodeExampleString}
/>

const CodeExampleString = (
  `
  import React from 'react'
  import { ThreadPostDelete } from '3box-ui-system'
  export default props => (
    <ThreadPostDelete
      threadName='comments'
      postId='123456789'
    />
  )
  `
)