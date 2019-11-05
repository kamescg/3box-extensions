import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box } from '@horizin/design-system-atoms'

import Context from "../Context";

const TabPanel = ({
  tabGroup,
  isActive,
  tabId,
  variant,
  styled,
  ...props
}) => {
  const state = useContext(Context)
  const { selectedTabId, setSelectedTabId, tabs, } = state // Grab Data from Global state.
  const isSelected = tabs && tabs[tabGroup] && tabs[tabGroup].selectedTabId === tabId; // Check IF selected tab.
  // const isSelected = selectedTabId === tabId; // Check IF selected tab.

  return (
    isSelected
      ? <Box
        isActive={isActive}
        variant={variant}
        {...styled} {...props}
      />
      : null
  )
};

TabPanel.propTypes = {
  isActive: PropTypes.bool,
  tabId: PropTypes.string,
  tabGroup: PropTypes.string,
  variant: PropTypes.string,
  styled: PropTypes.object,
};

export default TabPanel;
