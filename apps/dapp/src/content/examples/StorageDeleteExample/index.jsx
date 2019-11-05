

import { useState, useEffect } from 'react'
import {CodeCard} from '@horizin/design-system-molecules'
import {Login,StorageRemove} from '3box-ui-system'
import { FormStorageRemove } from 'forms'

export default () =>
<CodeCard
  title='Storage Remove'
  summary='Remove a value from 3Box storage.'
  example={<StorageRemoveForm />}
  code={CodeExampleString}
/>

const StorageRemoveForm = props => { 
  const [ values, setValues ] = useState()
  const [ isStorageRemoved, setStorageRemoveStatus ] = useState()  
  const [ storageStatus, setStorageStatus ] = useState()
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

const CodeExampleString = (
  `
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
  `
)