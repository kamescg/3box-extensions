import { forwardRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default forwardRef(({ children, open, style, top, left }, innerRef) => {
  const container = useRef(document.createElement('div'))

  const setRef = node => {
    if (innerRef) {
      typeof innerRef === 'function'
        ? innerRef(node)
        : (innerRef.current = node)
    }
  }

  useEffect(
    () => {
      setRef(container.current)
      container.current.style.cssText = `
        color: blue;
        border: 1px solid black;
        position: absolute;
        top: ${Math.floor(top)}px;
        left: ${Math.floor(left)}px;
        z-index: 1000
      `
      if (!document.body.contains(container.current)) {
        document.body.appendChild(container.current)
      }
      return () => {
        setRef(null)
        document.body.removeChild(container.current)
      }
    },
    [top],
  )
  return createPortal(children, container.current)
})
