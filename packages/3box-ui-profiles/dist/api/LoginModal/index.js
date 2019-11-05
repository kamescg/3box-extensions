"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _boxUiState = require("3box-ui-state");

var _effects = require("../effects");

var _LoginCard = _interopRequireDefault(require("../LoginCard"));

/* --- Global Dependencies --- */

/* --- React Component --- */
var Login = function Login(_ref) {
  var box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box"]);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      request = _useState4[0],
      setRequest = _useState4[1];

  var login = (0, _effects.useOpenRequestEffect)(box, {
    request: request
  });
  (0, _react.useEffect)(function () {
    if (box.isLoggedIn) setIsOpen(false);
  }, [box.isLoggedIn]);
  /* --- Effects --- */

  return !isOpen ? null : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(A.Fixed, {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1000
  }, _react["default"].createElement(A.BackgroundGradient, {
    gradient: "black",
    opacity: .6
  }), _react["default"].createElement(A.Flex, {
    center: true,
    column: true,
    flex: 1,
    height: "100%"
  }, _react["default"].createElement(A.Box, {
    maxWidth: 400
  }, !login.isLoggedIn ? !_react["default"].isValidElement(props.componentIsLoggedOut) ? _react["default"].createElement(props.componentIsLoggedOut) : props.componentIsLoading || null : !_react["default"].isValidElement(props.componentIsLoggedIn) ? _react["default"].createElement(props.componentIsLoggedIn) : props.componentIsLoading || null))));
};

Login.defaultProps = {
  componentIsLoggedOut: _react["default"].createElement(_LoginCard["default"], null),
  componentIsLoading: _react["default"].createElement(_LoginCard["default"], null),
  componentIsLoggedIn: _react["default"].createElement(_LoginCard["default"], null)
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(Login, props));
};

exports["default"] = _default;