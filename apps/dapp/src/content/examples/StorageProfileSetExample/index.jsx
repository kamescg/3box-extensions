

import {useState, useEffect} from 'react'
import {FormStorageSet} from 'forms'
import {CodeCard} from '@horizin/design-system-molecules'
import {Login, StorageSet} from '3box-ui-system'

export default () =>
<CodeCard
  title='Storage Set'
  summary='Set a value in a 3Box profile or space.'
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
    <FormStorageSet onSubmit={setValues} status={storageStatus} />
    {
      values && <StorageSet access='public' index={values.key} value={values.value} onSet={setStorageSet}  /> 
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
  import { FormStorageSet } from '3ID-system-helpers'
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
      <FormStorageSet 
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