import React, { useEffect, useState } from 'react'
import { Box, Flex, Span, Absolute } from '@horizin/design-system-atoms'
import { CSSTransition } from 'react-transition-group';

const ToastActions = ({ portal, label, content, closeOnClick, closeTimer, styled, styledLabel, id, ...props }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  

  const actionHandler = () => {
    setIsAnimating(false)
    setTimeout(() => {
      portal.closeToast({ id })
    }, 3);
  }
  useEffect(() => {
    if (closeTimer) {
      setTimeout(() => {
        actionHandler({ id })
      }, closeTimer);
    }
  }, [closeTimer])
  useEffect(() => {
    if (!isOpening && !isAnimating) {
      setIsOpening(true)
      setIsAnimating(true)
    }
  }, [isOpening, isAnimating])


  return (
    <CSSTransition
      in={(isAnimating)}
      timeout={300}
      classNames="alertss"
    >
      {
        !isOpening ? <div></div> :
            <Box sx={{p: 1, minWidth: 220}}>
              <Flex alignCenter between sx={{bg: 'white', borderRadius: '5px 5px 0 0', boxShadow: 0, p: 2,}} >
                <Atom.Flex alignCenter>
                  <Atom.Span sx={{bg: 'green', width: 15, height: 15, borderRadius: 6, m:1 }} ></Atom.Span>
                  {label && <Span xs>{label}</Span>}
                </Atom.Flex>
                  <Span xxs heavy effects={['pointer']} p={2} onClick={actionHandler}>X</Span>
              </Flex>
              {
                content &&
                <Box 
                  sx={{bg: 'white', borderTop: '1px solid', borderColor: 'shade', borderRadius: '0 0 5px 5px', boxShadow: 0,  p: 2}}
                  onClick={closeOnClick ? actionHandler : null} >
                    {
                      content && React.isValidElement(content)
                        ? React.cloneElement(content)
                        : content
                    }
                </Box>
              }
            </Box>
      }
    </CSSTransition>
  )
}

ToastActions.defaultProps = {
  closeOnClick: false,
  closeTimer: undefined
}

export default ToastActions