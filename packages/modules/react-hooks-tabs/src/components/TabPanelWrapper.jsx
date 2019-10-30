import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box, } from '@horizin/design-system-atoms'

const TabPanelStyled = styled(Box)`
${
  variant({
    variants: {
      default: {
        bg: 'white',
        boxShadow: 1,
        padding: 20
      }
    }
  })
  }
`

const TabPanel = ({
  isActive,
  variant,
  children,
  styled,
  ...props
}) => {

  return (
    <TabPanelStyled isActive={isActive} variant={variant} {...styled} {...props}>
      {children}
    </TabPanelStyled>
  )
};

TabPanel.propTypes = {
  isActive: PropTypes.bool,
  variant: PropTypes.string,
};

TabPanel.defaultProps = {
  variant: 'default'
}

export default TabPanel;
