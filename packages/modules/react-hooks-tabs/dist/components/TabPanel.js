"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _Context = _interopRequireDefault(require("../Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TabPanel = (_ref) => {
  var {
    tabGroup,
    isActive,
    tabId,
    variant,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["tabGroup", "isActive", "tabId", "variant", "styled"]);

  var state = (0, _react.useContext)(_Context.default);
  var {
    selectedTabId,
    setSelectedTabId,
    tabs
  } = state; // Grab Data from Global state.

  var isSelected = tabs && tabs[tabGroup] && tabs[tabGroup].selectedTabId === tabId; // Check IF selected tab.
  // const isSelected = selectedTabId === tabId; // Check IF selected tab.

  return isSelected ? _react.default.createElement(_designSystemAtoms.Box, _extends({
    isActive: isActive,
    variant: variant
  }, styled, props)) : null;
};

TabPanel.propTypes = {
  isActive: _propTypes.default.bool,
  tabId: _propTypes.default.string,
  tabGroup: _propTypes.default.string,
  variant: _propTypes.default.string,
  styled: _propTypes.default.object
};
var _default = TabPanel;
exports.default = _default;