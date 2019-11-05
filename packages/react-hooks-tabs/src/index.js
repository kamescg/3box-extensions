import Provider from "./Provider";
import Component from "./Component";
import withContext from "./withContext";
import withContextPassed from "./withContextPassed";
import Api from "./api.js";

// Components

import TabStyled from "./components/Tab";
import TabListStyled from "./components/TabList";
import TabPanelStyled from "./components/TabPanel";
import TabPanelWrapperStyled from "./components/TabPanelWrapper";
import TabsDesignSystemStyled from "./components/TabsDesignSystem";

export const TabProvider = Provider
export const Tabs = Provider
export const TabComponent = Component
export const TabWithContext = withContext
export const TabWithContextPassed = withContextPassed
export const TabAPI = Api
export const Tab = TabStyled
export const TabList = TabListStyled
export const TabPanel = TabPanelStyled
export const TabPanelWrapper = TabPanelWrapperStyled
export const TabsDesignSystem = TabsDesignSystemStyled


export default {
  TabProvider,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabComponent,
  TabWithContext,
  TabWithContextPassed,
  TabAPI,
}
