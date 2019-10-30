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

/**
 * @function useEnableEffect
 * @description Authenticated state.
 * @returns {Boolean} Login State (Success, Failutre, Neutral)
 */
export const useEnableEffect = (state) => {
  const [ isEnabled, setEnabled ] = useState(false)
  const [ isDispatched, setDispatched ] = useState(false)

  useEffect( () => { 
    if(state.isEnableRequested)
      setDispatched(true)
  }, [state.isEnableRequested])

  useEffect( () => { 
    if(state.isEnableSuccess)
      setEnabled(true)
  }, [state.isEnableSuccess])
  
  return {
    ready: isEnabled,
    dispatched: isDispatched
  }
}


/**
 * @function useOpenRequestEffect
 * @description Dispatch 3Box open request.
 * @returns {Object} 3Box Open Status (Request, Success, Failure)
 */
export const useOpenRequestEffect = (state, props) => {

  const [ isEnabled, setEnabled ] = useState(false)
  const [ isDispatched, setDispatched ] = useState(false)

  useEffect( () => { 
    if(state.isLoggingIn)
      setDispatched(true)
  }, [state.isLoggingIn])

  useEffect( () => { 
    if(state.isLoggedIn)
      setEnabled(true)
  }, [state.isLoggedIn])

  return {
    isDispatched: isDispatched,
    isLoggedIn: isEnabled,
    ready: isEnabled
  }
}


/**
 * @function useLoggedInEffect
 * @description Authenticated state.
 * @returns {Boolean} Login State (Success, Failutre, Neutral)
 */
export const useLoggedInEffect = (box, props = {}) => {
  const [ isReady, setIsReady ] = useState(false)

  useEffect(() => {
    const select = dot(box).get(`auth.spaces.${props.space}.instance`).value()
    if(!isReady && select)
      setIsReady(true)
  }, [box.isLoggedIn])

  return isReady

}

 
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

  return {
    ready: isReady,
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
    const selector = dot(box).get(`auth.spaces.${props.space}.instance`).value()
    if(selector) {
      setIsOpen(true)
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
    loading: isDispatched,
    ready: isOpen,
  }
}

/**
 * @function useStorageSetStatusEffect
 * @description Check Space Instance
 * @returns {Boolean} Instance Status
 */
export const useStorageSetStatusEffect = (box, props) => {
  const [ isComplete, setComplete ] = useState(false)

  useEffect(() => {
    if(box.store.sets.length === 0) {
      setComplete(true)
    } else {
      setComplete(false)
    }
  }, [box.store.sets])

  return {
    complete: isComplete
  }
}

/**
 * @function useStorageSelectorEffect
 * @description Check Space Instance
 * @returns {Boolean} Instance Status
 */
export const useStorageSelectorEffect = (box, props) => {
  const [ selected, setSelected ] = useState(false)

  useEffect(() => {
    const select = dot(box).get(`@.${props.address}.spaces.${props.space}.${props.selector}`).value()
    if(select)
      setSelected(select)
  }, [dot(box).get(`@.${props.address}.spaces.${props.space}.${props.selector}`).value()])

  return selected
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
 * @function useThreadPostStatusEffect
 * @description Watch thread post status effect.
 * @returns {Boolean} Instance Status
 */
export const useThreadPostStatusEffect = (box, props) => {
  const [ isComplete, setComplete ] = useState(false)

  useEffect(() => {
    if(box.store.posts.length === 0) {
      setComplete(true)
    } else {
      setComplete(false)
    }
  }, [box.store.posts])

  return {
    complete: isComplete
  }
}

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
  
  // // Watch Thread Chain
  useEffect(() => {
    const select = dot(box).get(`auth.threads.${props.threadName}`).value()
    if(isJoinRequested && !isReady && select)
      setIsReady(true)
      setIsSelected(true)
  }, [box.auth.threads])

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
    isReady, // deprecate
    ready: isReady,
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
    const selector = dot(box).get(`auth.threads${props.threadName}`).value()
    if(selector) {
      setIsOpen(true)
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
    console.log('thread is listening... shhh')
    try {
      // box.auth.threads[props.threadName].instance.onUpdate(()=>{console.log('call')})
    } catch (error) {
      console.log(error, 'thread update catch')
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
  useLoggedInEffect,
  useOpenRequestEffect,
  useSpaceOpenRequestEffect,
  useSpaceReadyEffect,
  useStorageSelectorEffect,
  useStorageDeleteRequestEffect,
  useStorageInsertRequestEffect,
  useStorageRemoveRequestEffect,
  useThreadJoinEffect,
  useThreadListenEffect,
  useThreadPostDeleteRequestEffect,
  useThreadReadyEffect
}