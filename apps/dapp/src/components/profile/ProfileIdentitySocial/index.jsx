

import {useState, useEffect} from 'react'
import {FormProfileSocial} from 'forms'
import {CodeCard} from '@horizin/design-system-molecules'
import {Login, StorageSetMerge} from '3box-ui-system'

export default () =>
<CodeCard
  title='Social Details'
  summary='Share your online social accounts.'
  example={<StorageSetForm />}
  code={CodeExampleString}
/>

/**
 * @function StorageSetForm
 * @param {*} props 
 */
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
    <FormProfileSocial onSubmit={setValues} status={storageStatus} />
    {
      values && (
      <StorageSetMerge
        access='public' 
        index='details'
        delta='social'
        value={values} 
        onSet={setStorageSet}  
      /> 
      )
    }
    <Atom.Box sx={{mt: 3}}>
      <Login />
    </Atom.Box>
  </>
)}


const CodeExampleString = (
  `
  import React from 'react'
  import { StorageSet } from '3box-ui-system'
  import { FormProfileIdentity } from '3ID-system-helpers'
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
      <FormProfileIdentity 
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
  `
)