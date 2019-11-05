/**
 * @function useStorageRetrieveEffect
 * @description Retrieve data from an Ethereum profile. 
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import dot from 'dot-prop-immutable-chain'
import { useState, useEffect } from "react";

/* --- Component --- */
const useStorageRetrieveEffect = (state, props) => {
  const [data, setData] = useState()
  const [ address, setAddress ] = useState(props.address || state.address)
  
  console.log(data, props.selector, 'stttooorage')

  useEffect( () => { 
    setAddress(state.address)
  }, [state.address])

  useEffect(() => {
    if (state['@'][address]) {
      let data
      if(!props.space) {
        data = dot.get(state, `@.${address}.profile.${props.selector}`)
        setData(data)
      } else {
        data = dot.get(state, `@.${address}.spaces.${props.space}.${props.access}.${props.selector}`)
        setData(data)
      }
    }
  }, [state['@'][address], props])


  return {
    data
  }
}

/* --- Export --- */
export default useStorageRetrieveEffect