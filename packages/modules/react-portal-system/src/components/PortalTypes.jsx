import React from "react";
import PropTypes from "prop-types";
import PortalInjection from './PortalCreate'
import { BackgroundImage, BackgroundGradient, Flex, Box, Button, Container, Heading, Span } from '@horizin/design-system-atoms'

const Component = ({
  isOpen,
  close,
  Content,
  className,
  activeClassName,
  backgroundClassName,
  label,
  layoutDefault,
  position,
  positionStyle,
  styled,
  styledBackground,
  styledModal,
  ...props
}) => {
  const portalElement = document.createElement('div');

  return !isOpen ? null :
    <>
      <PortalInjection id='portal'>

        <BackgroundGradient bg='black' fixed={true} absolute={false} opacity={.25} onClick={close} />

        {
          position == 'toast'
          && <Box card noPadding maxWidth={200} layout={positionStyle || layoutDefault || position} {...styledModal}>
            <div>
              {
                label &&
                <Flex alignCenter between gradient='blue' color='white' p={10} fullWidth>
                  <Span fontSize={[3]}>{label}</Span>
                  <Span pointer sm heavy pointer onClick={close}>X</Span>
                </Flex>
              }
              <Box p={10}>
                {
                  Content && React.isValidElement(Content)
                    ? React.cloneElement(Content)
                    : Content
                }
              </Box>
            </div>
          </Box>
        }
        {
          position == 'panel'
          && <Box card noPadding height='100%' layout={positionStyle || position} {...styledModal}>
            <div>
              {
                label &&
                <Flex alignCenter between gradient='blue' color='white' p={10} fullWidth>
                  <Span fontSize={[3]}>{label}</Span>
                  <Span pointer sm heavy pointer onClick={close}>X</Span>
                </Flex>
              }
              <Box p={20}>
                {
                  Content && React.isValidElement(Content)
                    ? React.cloneElement(Content)
                    : Content
                }
              </Box>
            </div>
          </Box>
        }
        {
          position === 'modal' &&


          <Box fixed zIndex={100} maxWidth={600} {...styledModal}>
            {
              label &&
              <Flex alignCenter borderRoundedTop between gradient='blue' color='white' p={10} fullWidth>
                <Span fontSize={[3]}>{label}</Span>
                <Span pointer sm heavy pointer onClick={close}>X</Span>
              </Flex>
            }
            <Box bg='white' card borderCurvedBottom>
              {
                Content && React.isValidElement(Content)
                  ? React.cloneElement(Content)
                  : Content
              }
            </Box>
          </Box>


        }


      </PortalInjection>
    </>
};

Component.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  open: PropTypes.func,
  Content: PropTypes.func,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  backgroundClassName: PropTypes.string
};

export default Component;
