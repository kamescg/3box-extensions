/**
 * @function AccessButton
 * @description Require 3Box isLoggedIn state to access children. 
 * @param {Object} props 
 */
/* --- Global --- */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxContext } from '3box-ui-state'
import { 
  useOpenRequestEffect,
  useSpaceReadyEffect,
  useThreadReadyEffect,
 } from './effects'
import { Button } from '@horizin/design-system-atoms'

/* --- Local --- */
import Login from './Login'
import { Avatar } from '..'

const AccessButton = ({ box, children, ...props }) => { 
  const [ disabled, setDisabled ] = useState(true)
  const [ disabledLabel, setDisabledLabel ] = useState(props.disabledLabel)
  const [ label, setEnabledLabel ] = useState(props.label)
  const open = useOpenRequestEffect(box)
  const space = useSpaceReadyEffect(box, props)
  const thread = useThreadReadyEffect(box, props)

  /**
   * @name loginReadyEffect
   * @description Watching open.ready status. 
   * If no further authentication is required tiggle disabled status.
   */
  useEffect( () => { 
    if(open.ready && !props.space)
      setDisabled(false)
  }, [open.ready])

  /**
   * @name spaceReadyEffect
   * @description Watch space.ready status. 
   * If no further authentication is required tiggle disabled status.
   */
  useEffect( () => { 
    if(space.ready && !props.threadName)
      setDisabled(false)
  }, [space])
  
  /**
   * @name threadReadyEffect
   * @description Watch thread.ready status. 
   * If no further authentication is required tiggle disabled status.
   */
  useEffect( () => { 
    if(thread.ready)
      setDisabled(false)
  }, [thread])


  /**
   * @name autoNameLabelEffect
   * @description Watch thread.ready status. 
   * If no further authentication is required tiggle disabled status.
   */
  useEffect( () => { 
    
    if(!props.space && !props.threadName)
      setDisabledLabel('Authentication Required')
    if(props.space && !props.threadName)
      setDisabledLabel(`open ${props.space} space`)
    if(props.space && props.threadName)
      setDisabledLabel(`join ${props.threadName} thread`)
  }, [props])


 return (
  <Button disabled={disabled} type='submit'>
    {
      disabled
      ? <Atom.Span>{disabledLabel}</Atom.Span>
      : <Atom.Span>{label}</Atom.Span>
    }
  </Button>
 )
}

AccessButton.defaultProps = {
  componentLogin: <Login />,  
  componentisLoggedIn: <Avatar />,  
  disabledLabel: 'Requires Authentication',
  label: 'Submit',
  isloginAuto: false,
  isLoginDisabled: false,  
}

AccessButton.propTypes = {
  componentLogin: PropTypes.func,
  isloginAuto: PropTypes.bool,
  isLoginDisabled: PropTypes.bool,
}

export default props =><BoxContext>{ box => ( <AccessButton box={box} {...props} /> )}</BoxContext>