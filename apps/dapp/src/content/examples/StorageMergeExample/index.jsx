import { useState, useEffect } from 'react'
import {FormStorageMerge} from 'forms'
import {CodeCard} from '@horizin/design-system-molecules'
import {Login,StorageSetMerge} from '3box-ui-system'



export default () =>
<CodeCard
  title='Storage Merge'
  summary='Merge a value in a 3Box profile or space. Access nested objects and arrays with support for dot notation.'
  example={<StorageSetForm />}
  code={CodeExampleString}
/>

const Example = () =>
<AccessAuthentication>
  <Atom.Span tag>Authentication Complete</Atom.Span>
</AccessAuthentication>


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

const CodeExampleString = (
  `
  import React from 'react'
  import { StorageSet } from '3box-ui-system'
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
  `
)