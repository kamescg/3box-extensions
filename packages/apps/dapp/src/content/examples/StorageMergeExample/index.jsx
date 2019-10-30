

import {
  Login,
  SpaceOpen,
  StorageSetMerge
} from '3box-ui-system'


import { 
  FormStorageMerge,
} from 'forms'
import { useState, useEffect } from 'react'


/**
 * @function StorageSetForm
 * @param {*} props
 */
const StorageSetForm = props => { 
  const [ values, setValues ] = useState()
  const [ isStorageSet, setStorageSet ] = useState()  
  const [ storageStatus, setStorageStatus ] = useState()

  console.log(values, isStorageSet, 'StorageSetForm')

  useEffect(() => { 
    if(isStorageSet)
      setStorageStatus(true)
  }, [isStorageSet])
 return(
  <>
    <FormStorageMerge onSubmit={setValues} status={storageStatus} />
    {
      values && 
      <StorageSetMerge
        deltaCreate
        access='public'
        index={values.key}
        value={values.value} 
        onStorageMergeSuccess={setStorageSet}
      /> 
    }
    <Atom.Box sx={{mt: 3}}>
      <Login />
    </Atom.Box>
  </>
)}

const StorageMergeExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%', p:4 }}>
          <Atom.Heading md heavy>Storage Merge</Atom.Heading>
          <Atom.Paragraph>
            Merge a value in a 3Box profile or space. Access nested objects and arrays with support for dot notation.
          </Atom.Paragraph>
          <StorageSetForm />
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { StorageSet } from '3ID-system'
import { FormStorageMerge } from '3ID-system-helpers'
const StorageSetForm = props => { 
  const [ values, setValues ] = useState()
  const [ isStorageSet, setStorageSet ] = useState()  
  const [ storageStatus, setStorageStatus ] = useState()

  useEffect(() => { 
    if(isStorageSet)
      setStorageStatus(true)
  }, [isStorageSet])
 return(
  <>
    <FormStorageMerge 
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


export default StorageMergeExample