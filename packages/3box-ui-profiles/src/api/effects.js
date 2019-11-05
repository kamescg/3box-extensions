/**
 * @name 3BoxSystemEffects
 * @description 3Box interface side effect management.
 * - useLoggedInEffect
 * - useSpaceReadyEffect
 * - useOpenRequestEffect
 * - useSpaceOpenRequestEffect
 * - useStorageDeleteRequestEffect 
 * - useThreadJoinEffect
 * - useThreadReadyEffect
 * - useThreadPostDeleteRequestEffect
 */
import dot from 'dot-prop-immutable-chain'
import { useEffect, useState } from 'react';
import { isAddress } from './helpers'

/**
 * @function useLoggedInEffect
 * @description Authenticated state.
 * @returns {Boolean} Login State (Success, Failutre, Neutral)
 */
export const useLoggedInEffect = (box) =>box.isLoggedIn
 
/**
 * @function useSpaceReadyEffect
 * @description Check Space Instance
 * @returns {Boolean} Instance Status
 */
export const useSpaceReadyEffect = (box, props) => {
  const [ isReady, setIsReady ] = useState(false)

  useEffect(() => {
    const select = dot(box).get(`auth.spaces.${props.space}.instance`).value()
    if(!isReady && select)
      setIsReady(true)
  }, [box.auth.spaces])

  return isReady
}


/**
 * @function useOpenRequestEffect
 * @description Dispatch 3Box open request.
 * @returns {Object} 3Box Open Status (Request, Success, Failure)
 */
export const useOpenRequestEffect = (box, props) => {
  const [ isRequested, setIsRequested ] = useState(props.request)

  // Watch 3Box instance and update login status when initialized.
  useEffect(() => setIsRequested(props.request), [props.request])

  /**
   * @name TriggerBoxOpen
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */
  useEffect(() =>(isRequested && box.address) && box.login(), [isRequested, box.address])

  return {
    isDispatched: box.isLoggingIn,
    isLoggedIn: box.isLoggedIn,
  }
}


/* ------------------------- */
/* Profile Get Effect
/* ------------------------- */
/**
 * @function useProfileRetrieveEffect
 * @description Dispatch 3Box open request.
 * @returns {Object} 3Box Open Status (Request, Success, Failure)
 */
export const useProfileRetrieveEffect = (box, props) => {
  const [ address, setAddress ] = useState(props.address)
  const [ isAddressValid, setAddressValid ] = useState(false)
  const [ isProfileRetrieved, setProfileRetrieved ] = useState(false)
  const [ isRequested, setRequested ] = useState(false)
  const [ profile, setProfile ] = useState(false)


  /**
   * @name useIsAddressValidEffect
   * @description Check if Ethereum address is valid
   */
  useEffect( () => { 
    if(isAddress(props.address)) {
      setAddress(props.address)
      setAddressValid(true)
    }
  }, [props.address])

  /**
   * @name useRequestProfileEffect
   * @description Check if Ethereum address is valid
   */
  useEffect( () => { 
    if(isAddressValid)
      box.getProfile(address)
      setRequested(true)
  }, [props.address])

  /**
   * @name useIsProfileReadyEffect
   * @description Check if Ethereum address is valid
   */
  useEffect( () => { 
    if(box.data.profiles[address])
      setProfileRetrieved(true)
      setProfile(box.data.profiles[address])
  }, [box.data.profiles[address]])

  return {
    isValidRequest: isAddressValid,
    isRequested,
    isReady: isProfileRetrieved,
    profile,
  }
}


/**
 * @function useSpaceOpenRequestEffect
 * @description Dispatch 3Box open request.
 */
export const useSpaceOpenRequestEffect = (box, props) => {
  const [ isRequested, setIsRequested ] = useState(props.request)
  const [ isDispatched, setIsDispatched ] = useState()
  const [ isOpen, setIsOpen ] = useState()

  // Watch 3Box instance and update login status when initialized.
  useEffect(() => setIsRequested(props.request), [props.request])

  /**
   * @name SpaceInstanceStatus
   * @abstract Space
   * - trigger:box.auth.spaces[SPACE]
   * - requirement:box.address
   */
  useEffect( () => { 
    const selector = dot(box).get(`box.auth.spaces${props.space}.instance`).value()
    if(selector) {
      setIsOpened(true)
    }
  }, [box.auth.spaces[props.space]])

  useEffect(() => {
    if (!box.auth.spaces[props.space] && isRequested && box.address) {
      box.openSpace(props.space)
      setIsDispatched(true)
    }
  }, [isRequested, box.address])

  return {
    isDispatched,
    isOpen,
  }
}

/**
 * @function useStorageRemoveRequestEffect
 * @description Dispatch delete request if requirements met.
 */
export const useStorageRemoveRequestEffect = (box, props) => {
  const [ isDispatched, setIsDispatched ] = useState()
  const invalidRequestHandler = () => {
    setIsDispatched(false)
  }

  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */
  useEffect(() => {
    if ( !isDispatched && props.space && props.index && props.delta && value) {
      box.remove({
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
        value: props.value,
      })
      setIsDispatched(true)
    } else {
      invalidRequestHandler()
    }
  }, [props])

  return {
    status: isDispatched
  }
}

/**
 * @function useStorageInsertRequestEffect
 * @description Dispatch delete request if requirements met.
 */
export const useStorageInsertRequestEffect = (box, props) => {
  const [ isDispatched, setIsDispatched ] = useState()
  const invalidRequestHandler = () => {
    setIsDispatched(false)
  }

  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */
  useEffect(() => {
    if ( !isDispatched && props.space && props.index && props.delta && value) {
      box.insert({
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
        value: props.value,
      })
      setIsDispatched(true)
    } else {
      invalidRequestHandler()
    }
  }, [props])

  return {
    status: isDispatched
  }
}
/**
 * @function useStorageDeleteRequestEffect
 * @description Dispatch delete request if requirements met.
 */
export const useStorageDeleteRequestEffect = (box, props) => {
  const [ message, setMessage ] = useState(0)
  const [ isDispatched, setIsDispatched ] = useState()
  const invalidRequestHandler = () => {
    setMessage(1)
    setIsDispatched(false)
  }

  /**
   * @name TriggerStorageDelete
   * @abstract Trigger 3Box open when request is passed.
   * - trigger:isRequested
   * - requirement:box.address
   */
  useEffect(() => {
    if ( !isDispatched && props.space && props.index && props.delta) {
      box.delete({
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
      })
      setIsDispatched(true)
    } else {
      invalidRequestHandler()
    }
  }, [props])

  return {
    status: isDispatched,
    message: message,
  }
}

/* --------------------- */
/* Threads
/* --------------------- */

/**
 * @function useThreadJoinEffect
 * @description Check if 3Box Thread is joined.
 */
export const useThreadJoinEffect = (box, props) => {
  // Passed State
  const [ isJoinRequested, setIsJoinRequested ] = useState(props.requestJoin || false)
  // Internal State
  const [ isSpaceReady, setIsSpaceReady ] = useState(false)
  const [ isDispatched, setIsDispatched ] = useState(false)
  const [ isReady, setIsReady ] = useState(false)
  const [ isSelected, setIsSelected ] = useState(false)
  
  /* --- Passed Props State Effects --- */
  useEffect( () => { 
    if(!isJoinRequested)
      setIsJoinRequested(true)
  }, [props.requestJoin])

  /* --- Internal State Effects --- */
  // Space Instance Ready
  useEffect( () => { 
    if(!isSpaceReady) {
      const selector = dot(box).get(`auth.spaces.${props.space}.instance`).value()
      if(selector)setIsSpaceReady(true)
    }
  }, [box.auth.spaces[props.space]])

  // Dispatch Thread Join Request
  useEffect(() => {
    try {
      if(isJoinRequested) {
        setIsDispatched(true)
        box.joinThread({
          threadAddress: props.threadAddress,
          threadName: props.threadName,
          space: props.space,
          options: props.options
        });
      }
    } catch (error) {
      console.log(error)
    }

  }, [ isJoinRequested ])
  
  // Watch Thread Chain
  useEffect(() => {
    const select = dot(box).get(`auth.threads.${props.threadName}`).value()
    if(isJoinRequested && !isReady && select)
      setIsReady(true)
      setIsSelected(true)
  }, [isReady])

  return {
    isSpaceReady,
    isDispatched,
    isReady
  }
}

/**
 * @function useThreadReadyEffect
 * @description Check if 3Box Thread is joined.
 */
export const useThreadReadyEffect = (box, props) => {
  const [ isReady, setIsReady ] = useState(false)
  
  useEffect(() => {
    const select = dot(box).get(`auth.threads.${props.threadName}.instance`).value()
    if( !isReady && select)
      setIsReady(true)
  }, [box.auth.threads])

  return {
    isReady
  }
}

/**
 * @function useThreadPostDeleteRequestEffect
 * @description Dispatch 3Box open request.
 */
export const useThreadPostDeleteRequestEffect = (box, props) => {
  const [ isRequested, setIsRequested ] = useState(props.request)
  const [ message, setMessage ] = useState(0)
  const [ isDispatched, setIsDispatched ] = useState()
  const [ isOpen, setIsOpen ] = useState()


  // Watch 3Box instance and update login status when initialized.
  useEffect(() => setIsRequested(props.request), [props.request])

  useEffect( () => { 
    const selector = dot(box).get(`box.auth.threads${props.threadName}`).value()
    if(selector) {
      setIsOpened(true)
    }
  
  }, [box.auth.threads[props.threadName]])

  useEffect(() => {
    if (isRequested && props.threadName && props.postId) {
      box.threadPostDelete({
        threadName: props.threadName,
        postId: props.postId
      })
      setIsDispatched(true)
    }
  }, [isRequested, box.address])

  return {
    isDispatched,
    isOpen,
    message,
  }
}

/**
 * @function useThreadListenEffect
 * @description Listen for thread updates
 */
export const useThreadListenEffect = (box, props) => {
  // Passed State
  const [ isRequested, setIsRequested ] = useState(props.listen)

  // Internal State
  const [ isDispatched, setIsDispatched ] = useState(false)
  const [ isActive, setIsActive ] = useState(false)
  const [ threadId ] = useState(props.threadName || props.threadAddress)

  if(isActive) {
    try {
      // box.auth.threads[props.threadName].instance.onUpdate(()=>{console.log('call')})
    } catch (error) {
    }
  }
  
  /* --- Passed Props State Effects --- */
  useEffect( () => { 
    if(!isRequested)
    setIsRequested(true)
  }, [props.listen])

  /* --- Internal State Effects --- */
  // Active
  useEffect( () => { 
    if(!isActive) {
      const selector = dot(box).get(`auth.threads.${props.threadName}`).value()
      if(selector)setIsActive(true)
    }
  }, [box.listening[threadId]])

  // Dispatch
  useEffect(() => {
    if(isRequested) {
      setIsDispatched(true)
      box.listenThread({
        threadAddress: props.threadAddress,
        threadName: props.threadName,
      });
    }
  }, [ isRequested ])
  
  return {
    isActive,
    isDispatched,
  }
}


export default {
  useProfileRetrieveEffect,
  useThreadListenEffect
}