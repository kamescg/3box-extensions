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

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

var _effects = require("../effects");

/* --- Global Dependencies --- */
var Login = function Login(_ref) {
  var box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box"]);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      request = _useState2[0],
      setRequest = _useState2[1];

  var login = (0, _effects.useOpenRequestEffect)(box, {
    request: request
  });
  /* --- Effects --- */

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(A.Span, {
    onClick: setRequest
  }, !login.isDispatched && !login.isLoggedIn ? !_react["default"].isValidElement(props.componentIsLoggedOut) ? _react["default"].createElement(props.componentIsLoggedOut) : props.componentIsLoggedOut || null : null), login.isDispatched && !login.isLoggedIn ? !_react["default"].isValidElement(props.componentIsLoading) ? _react["default"].createElement(props.componentIsLoading) : props.componentIsLoading || null : null, login.isLoggedIn && _react["default"].createElement(A.Span, null, props.children || !_react["default"].isValidElement(props.componentIsLoggedIn) ? _react["default"].createElement(props.componentIsLoggedIn) : props.componentIsLoggedIn || null));
};

Login.defaultProps = {
  componentIsLoggedOut: _react["default"].createElement(_designSystemAtoms.Span, {
    pointer: true,
    xs: true,
    tag: "white"
  }, "Login ", _react["default"].createElement(A.Span, {
    opacity: .6,
    pl: 1
  }, _react["default"].createElement(A.LoadingSquare, null))),
  componentIsLoading: _react["default"].createElement(_designSystemAtoms.Span, {
    pointer: true,
    xs: true,
    tag: "white"
  }, "Loading ", _react["default"].createElement(A.Span, {
    pl: 1
  }, _react["default"].createElement(A.LoadingSquare, {
    className: "active"
  }))),
  componentIsLoggedIn: _react["default"].createElement(_designSystemAtoms.Span, {
    pointer: true,
    xs: true,
    tag: "white"
  }, "Active ", _react["default"].createElement(A.Span, {
    pl: 1
  }, _react["default"].createElement(A.LoadingSquare, {
    className: "slow"
  })))
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(Login, props));
};

exports["default"] = _default;