

import {
  Login,
  StorageRemove
} from '3box-ui-system'
import { FormStorageRemove } from 'forms'
import { useState, useEffect } from 'react'

/**
 * @function StorageRemoveForm
 * @param {*} props
 */
const StorageRemoveForm = props => { 
  const [ values, setValues ] = useState()
  const [ isStorageRemoved, setStorageRemoveStatus ] = useState()  
  const [ storageStatus, setStorageStatus ] = useState()

  console.log(values, 'StorageRemoveForm')
  useEffect(() => { 
    if(isStorageRemoved)
      setStorageStatus(true)
  }, [isStorageRemoved])

 return(
  <>
    <FormStorageRemove onSubmit={setValues} status={storageStatus} />
    {
      values && 
      <StorageRemove
        access='public'
        index={values.key}
        onStorageRemoveSuccess={setStorageRemoveStatus}
      /> 
    }
    <Atom.Box sx={{mt: 3}}>
      <Login />
    </Atom.Box>
  </>
)}

const StorageRemoveExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%', p:4 }}>
          <Atom.Heading md heavy>Storage Remove</Atom.Heading>
          <Atom.Paragraph>
            Remove a value from 3Box storage.
          </Atom.Paragraph>
          <StorageRemoveForm />
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { StorageSet } from '3box-ui-system'
import { FormStorageRemove } from '3ID-system-helpers'
const StorageRemoveForm = props => { 
  const [ values, setValues ] = useState()
  const [ isStorageRemoved, setStorageSet ] = useState()  
  const [ storageStatus, setStorageStatus ] = useState()

  useEffect(() => { 
    if(isStorageRemoved)
      setStorageStatus(true)
  }, [isStorageRemoved])
 return(
  <>
    <FormStorageRemove 
      onSubmit={setValues} 
      status={storageStatus} />
    {
     values && 
      <StorageSet 
        access='public' 
        index={values.key} 
        value={values.value}
        space={undefined} // OPTIONAL VALUE
        onSet={setStorageSet}  
      /> 
    }
  </>
)}
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}


export default StorageRemoveExample