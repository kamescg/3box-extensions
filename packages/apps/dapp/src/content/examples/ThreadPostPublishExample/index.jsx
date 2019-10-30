import {
  Login,
  MessagePost,
  SpaceOpen,
  StorageSet,
  ThreadJoin,
  AccessThread
} from '3box-ui-system'


import { 
  FormThreadPostPublish
} from 'forms'
import { useState, useEffect } from 'react'


/**
 * @function ThreadPostForm
 * @param {*} props 
 */
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

const ThreadPostPublishExample = props => {
  return (
    <Atom.Container my={3}>
    <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
      <Atom.Flex column flex={2} sx={{p: 4}}>

        <Atom.Heading md heavy>Thread Post Publish</Atom.Heading>
        <Atom.Paragraph>
          Publish a message to a 3Box thread.
        </Atom.Paragraph>

        <ThreadPostForm />

      </Atom.Flex>
      <Atom.Flex flex={3} width={'60%'}>
        <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
          <code>
            <pre>
              {`
import React from 'react'
import { ThreadPostDelete } from '3ID-system'
export default props => (
<ThreadPostPublish
  threadName='commentThread'
  post={
    comment: 'What if you could... Would you?'
  }
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


export default ThreadPostPublishExample