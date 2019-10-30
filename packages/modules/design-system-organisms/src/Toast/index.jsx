/* --- Global Dependencies --- */
import React from "react";
import { PortalContext } from 'react-portal-system'

export default ({
  content,
  id,
  label,
  styled,
  closeTimer,
  closeOnClick,
  ...props
}) => (
    <PortalContext>
      {
        portal => (
          <span onClick={() => portal.openToast({ content, closeTimer, closeOnClick, label, id, styled })} {...props}/>
        )
      }
    </PortalContext>
  )