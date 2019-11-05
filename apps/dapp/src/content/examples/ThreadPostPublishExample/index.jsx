import { useState, useEffect } from 'react'
import {CodeCard} from '@horizin/design-system-molecules'
import {
  MessagePost,
  AccessThread
} from '3box-ui-system'
import { FormThreadPostPublish} from 'forms'



export default () =>
<CodeCard
  title='Storage Remove'
  summary='Publish a message to a 3Box thread.'
  example={<ThreadPostForm />}
  code={CodeExampleString}
/>

const ThreadPostForm = props => { 
  const [ values, setValues ] = useState()
  const [ isMessagePostSuccess, setThreadPostCallback ] = useState()  
  const [ threadPostStatus, setThreadPostStatus ] = useState()

  useEffect(() => { 
    if(isMessagePostSuccess)
      setThreadPostStatus(true)
  }, [isMessagePostSuccess])

 return(
  <>
    <FormThreadPostPublish 
      onSubmit={setValues} 
      status={threadPostStatus} 
      accessLevel={{space: 'web3', threadName: 'comments'}} 
    />
    {
      values && (
        <MessagePost 
          threadName={'comments'}
          post={values}
          onMessagePost={setThreadPostCallback}  /> 
      )
    }
    <Atom.Box sx={{mt: 3}}>
      <AccessThread space='web3' threadName='comments'>Thread Joined</AccessThread>
    </Atom.Box>
  </>
)}

const CodeExampleString = (
`
import React from 'react'
import { ThreadPostPublish } from '3box-ui-system'
export default props => (
<ThreadPostPublish
  threadName='comments'
  post={
    comment: 'What if you could... Would you?'
  }
/>
)
`
)