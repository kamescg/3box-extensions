import React, { useEffect, useRef, useState } from 'react'
import Portal from './PortalInstance'

const PortalPositioned = ({ children, open, style, targetRef }) => {
  const popoverRef = useRef(null)
  const [portalStyles, setPortalStyles] = useState({})

  useEffect(
    () => {
      if (!open) return
      const targetBox = targetRef.current.getBoundingClientRect()
      const popoverBox = popoverRef.current.getBoundingClientRect()

      setPortalStyles({
        top: targetBox.bottom,
        left: targetBox.left,
      })
    },
    [open, targetRef],
  )
  return (
    open ?
      <Portal
        ref={popoverRef}
        open={open}
        left={portalStyles.left}
        top={portalStyles.top}
        style={{
          position: 'absolute',
          ...portalStyles,
          ...style,
        }}
      >
        {children}
      </Portal>
      : null
  )
}

export default PortalPositioned