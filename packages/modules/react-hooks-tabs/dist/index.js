"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TabsDesignSystem = exports.TabPanelWrapper = exports.TabPanel = exports.TabList = exports.Tab = exports.TabAPI = exports.TabWithContextPassed = exports.TabWithContext = exports.TabComponent = exports.Tabs = exports.TabProvider = void 0;

var _Provider = _interopRequireDefault(require("./Provider"));

var _Component = _interopRequireDefault(require("./Component"));

var _withContext = _interopRequireDefault(require("./withContext"));

var _withContextPassed = _interopRequireDefault(require("./withContextPassed"));

var _api = _interopRequireDefault(require("./api.js"));

var _Tab = _interopRequireDefault(require("./components/Tab"));

var _TabList = _interopRequireDefault(require("./components/TabList"));

var _TabPanel = _interopRequireDefault(require("./components/TabPanel"));

var _TabPanelWrapper = _interopRequireDefault(require("./components/TabPanelWrapper"));

var _TabsDesignSystem = _interopRequireDefault(require("./components/TabsDesignSystem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
var TabProvider = _Provider.default;
exports.TabProvider = TabProvider;
var Tabs = _Provider.default;
exports.Tabs = Tabs;
var TabComponent = _Component.default;
exports.TabComponent = TabComponent;
var TabWithContext = _withContext.default;
exports.TabWithContext = TabWithContext;
var TabWithContextPassed = _withContextPassed.default;
exports.TabWithContextPassed = TabWithContextPassed;
var TabAPI = _api.default;
exports.TabAPI = TabAPI;
var Tab = _Tab.default;
exports.Tab = Tab;
var TabList = _TabList.default;
exports.TabList = TabList;
var TabPanel = _TabPanel.default;
exports.TabPanel = TabPanel;
var TabPanelWrapper = _TabPanelWrapper.default;
exports.TabPanelWrapper = TabPanelWrapper;
var TabsDesignSystem = _TabsDesignSystem.default;
exports.TabsDesignSystem = TabsDesignSystem;
var _default = {
  TabProvider,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabComponent,
  TabWithContext,
  TabWithContextPassed,
  TabAPI
};
exports.default = _default;