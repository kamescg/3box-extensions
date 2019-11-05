/* --- Global Dependencies --- */
import React, { useEffect, useState } from "react";
import { PortalContext } from 'react-portal-system'

const ToastOpen = ({ portal, content, closeTimer, closeOnClick, label, id, sx, ...props}) => { 
  const [ isOpen, setOpen ] = useState(props.open)
  useEffect( () => { 
    if(isOpen) 
      portal.openToast({ content, closeTimer, closeOnClick, label, id, sx })
  }, [isOpen])

  useEffect( () => { 
    setOpen(props.open)
  }, props.open)

  return(null)}

export default ({
  ...props
}) => (
    <PortalContext>
      {
        portal => (
          <ToastOpen portal={portal} {...props} />
        )
      }
    </PortalContext>
  )