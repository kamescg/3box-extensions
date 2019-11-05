import React, { useEffect, useState } from 'react'
import { Box, Flex, Span, Absolute, Fixed } from '@horizin/design-system-atoms'
import { CSSTransition } from 'react-transition-group';

const PanelActions = ({ portal, label, content, styled, styledLabel, id, ...props }) => {
  const [ style, setStyle ] = useState({
    bg: 'white',
    boxShadow: 0,
    p: 10,
    top: 0,
    bottom: 0,
    right: 0,
    position: 'fixed',
    minWidth: 300,
    zIndex: 100,
  })
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const closeHandler = () => {
    setIsAnimating(false)
    setTimeout(() => {
      portal.closePanels()
    }, 300);
  }

  useEffect(() => {
    if (!isOpening && !isAnimating) {
      setIsOpening(true)
      setIsAnimating(true)
    }
  }, [isOpening, isAnimating])
  return (
    <>
      <CSSTransition in={(isAnimating)} timeout={300} classNames="fadeIn">
        <Fixed sx={{bg: 'night', opacity: 0.2, zIndex: 90}} fillContainer onClick={closeHandler} />
      </CSSTransition>

      <CSSTransition in={(isAnimating)} timeout={300} classNames="fadeInLeft">
        {
          !isOpening ? <div></div> :
            <Box sx={style}>
              {
                label &&
                <Flex alignCenter between fullWidth gradient='gray' p={10} {...styledLabel}>
                  <Span fontSize={[3]}>{label}</Span>
                  <Span pointer md heavy pointer onClick={closeHandler}>X</Span>
                </Flex>
              }
              <Box>
                {
                  content && React.isValidElement(content)
                    ? React.cloneElement(content)
                    : content
                }
              </Box>
            </Box>
        }
      </CSSTransition>
    </>
  )
}

export default PanelActions