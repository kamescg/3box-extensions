"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _boxUiState = require("3box-ui-state");

var _Component = _interopRequireDefault(require("../helpers/Component"));

/* --- Global Dependencies --- */

/* --- React Component --- */
var ProfileSelector = function ProfileSelector(_ref) {
  var box = _ref.box,
      selector = _ref.selector,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "selector"]);

  /* --- Iternal State --- */
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selection = _useState2[0],
      setSelection = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      dispatched = _useState4[0],
      setDispatched = _useState4[1];
  /* --- Passed State --- */


  var _useState5 = (0, _react.useState)(props.address),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      address = _useState6[0],
      setAddress = _useState6[1];
  /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */


  var LoadGlobalConfigurationEffect = function LoadGlobalConfigurationEffect() {
    return (0, _react.useEffect)(function () {}, [address]);
  };
  /**
   * @function GetProfileEffect
   * @description IF proper conditions are met request space.
   */


  var GetProfileEffect = function GetProfileEffect() {
    return (0, _react.useEffect)(function () {
      if (address && !dispatched) {
        box.getProfile(address);
        setDispatched(true);
      }
    }, [address, dispatched]);
  };
  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */


  var SetSelectionEffect = function SetSelectionEffect() {
    return (0, _react.useEffect)(function () {
      setSelection((0, _dotPropImmutableChain["default"])(box).get("data.profiles.".concat(address)).value());
    }, [(0, _dotPropImmutableChain["default"])(box).get("data.profiles.".concat(address)).value()]);
  };
  /* --- Init Effects ---*/


  if (props.isGlobalConfig) LoadGlobalConfigurationEffect();
  if (props.canRequestData) GetProfileEffect();
  if (props.isRefresh) SetSelectionEffect();
  /* --- Return Component ---*/

  return _react["default"].createElement(_Component["default"], {
    data: selection,
    pass: props.pass,
    component: props.component
  });
};

ProfileSelector.defaultProps = {
  canRequestData: true,
  component: function component() {
    return null;
  },
  isGlobalConfig: true,
  isRefresh: true
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfileSelector, props));
};

exports["default"] = _default;