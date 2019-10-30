import React, { useEffect, useState } from 'react'
import { BackgroundGradient, Box, Flex, Span, Absolute } from '@horizin/design-system-atoms'
import { CSSTransition } from 'react-transition-group';

const ModalActions = ({ closeCallback, portal, label, content, styled, styledLabel, variant, variantInner, id, ...props }) => {
const [isAnimating, setIsAnimating] = useState(false);
const [isOpening, setIsOpening] = useState(false);

console.log(variant, 'variantInner')

const closeHandler = () => {
  setIsAnimating(false)
  if (closeCallback) closeCallback()
  portal.closeModals()
}

useEffect(() => {
  if (!isOpening && !isAnimating) {
    setIsOpening(true)
    setIsAnimating(true)
  }
}, [isOpening, isAnimating])

return (
  <>
      {
        !isOpening ? null :
          <Flex center column position='fixed' top={0} bottom={0} left={0} right={0} variant={variant} {...styled} >
            <span onClick={()=>closeHandler()}><BackgroundGradient bg='black' fixed={true} absolute={false} opacity={.2} /></span>
            <Box variant={variantInner} {...props.styledInner} >
              {
                label &&
                <Flex alignCenter between fullWidth gradient='gray' p={10} {...styledLabel}>
                  <Span fontSize={[3]}>{label}</Span>
                  <Span pointer md heavy pointer onClick={()=>closeHandler()}>X</Span>
                </Flex>
              }
              <Flex column flex={1} height='100%' fullWidth>
                {
                  content && React.isValidElement(content)
                    ? React.cloneElement(content)
                    : content
                }
              </Flex>
            </Box>
          </Flex>
      }
  </>
)
}

export default ModalActions

