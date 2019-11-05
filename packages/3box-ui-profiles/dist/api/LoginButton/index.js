"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _designSystemOrganisms = require("@horizin/design-system-organisms");

var _boxUiState = require("3box-ui-state");

var _ethereumBlockiesBase = _interopRequireDefault(require("ethereum-blockies-base64"));

/* --- Global Dependencies --- */

/* --- React Component --- */
var BoxLoginButton = function BoxLoginButton(_ref) {
  var box = _ref.box,
      isMenuAvailable = _ref.isMenuAvailable,
      styled = _ref.styled,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "isMenuAvailable", "styled", "children"]);

  /* --- State --- */
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isLoggingIn = _useState2[0],
      setIsLoggingIn = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isLoggedIn = _useState4[0],
      setIsLoggedIn = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      blockie = _useState6[0],
      setBlockie = _useState6[1];
  /* --- Effects --- */

  /**
   * @function AutoOpenEffect
   * @description
   * Automatically connect to space without user input.
   */


  (0, _react.useEffect)(function () {
    if (props.auto) {
      box.login();
    }
  }, [props.auto]);
  /**
   * @function IsLoggedInEffect
   * @description
   * Watch LoggedIn State
   */

  (0, _react.useEffect)(function () {
    if (box.isLoggedIn) setIsLoggedIn(true);
  }, [box.isLoggedIn]);
  /**
   * @function IsLoggingInEffect
   * @description
   * Watch LoggingIn State
   */

  (0, _react.useEffect)(function () {
    if (box.isLoggingIn) setIsLoggingIn(true);
  }, [box.isLoggingIn]);
  /**
   * @function MakeBlockieEffect
   */

  (0, _react.useEffect)(function () {
    if (box.address) {
      var block = (0, _ethereumBlockiesBase["default"])(box.address);
      setBlockie(block);
    }
  }, [box.address]);
  return _react["default"].createElement(_react["default"].Fragment, null, !box.address && _react["default"].createElement(EnableEthereumRequestButton, {
    box: box
  }), box.address && !isLoggedIn && _react["default"].createElement(LoginRequestButton, {
    box: box,
    isLoggingIn: isLoggingIn,
    isLoggedIn: isLoggedIn
  }), box.address && isLoggedIn && _react["default"].createElement(LoginSuccessButton, {
    box: box,
    isLoggingIn: isLoggingIn,
    isLoggedIn: isLoggedIn
  }));
};
/**
 * @function EnableEthereumRequestButton
 * @param {*} param0 
 */


var EnableEthereumRequestButton = function EnableEthereumRequestButton(_ref2) {
  var box = _ref2.box,
      styled = _ref2.styled,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["box", "styled"]);
  return _react["default"].createElement(_designSystemAtoms.Button, {
    variant: "dark",
    onClick: box.enable
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Box, null, _react["default"].createElement(_designSystemAtoms.Absolute, {
    top: -10,
    left: -2
  }, _react["default"].createElement(_designSystemAtoms.Loading, {
    type: "ripple"
  })), _react["default"].createElement(_designSystemAtoms.Image, {
    maxWidth: 36,
    circle: true,
    mx: 2,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  })), _react["default"].createElement(_designSystemAtoms.Span, null, "Enable ETH Blockchain")));
};
/**
 * @function LoginRequestButton
 * @param {Object} props
 */


var LoginRequestButton = function LoginRequestButton(_ref3) {
  var box = _ref3.box,
      children = _ref3.children,
      props = (0, _objectWithoutProperties2["default"])(_ref3, ["box", "children"]);
  return _react["default"].createElement(_designSystemAtoms.Button, (0, _extends2["default"])({}, props.styled, props, {
    onClick: function onClick() {
      return box.login();
    }
  }), props.isLoggingIn ? _react["default"].createElement(_designSystemAtoms.Span, {
    pl: 10,
    pr: 10
  }, "Loading...") : _react["default"].createElement(_designSystemAtoms.Span, null, children ? children : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("strong", null, "\u039EID"), " Login")));
};
/**
 * @function LoginSuccessButton
 * @param {Object} props
 */


var LoginSuccessButton = function LoginSuccessButton(props) {
  return _react["default"].createElement(_designSystemAtoms.Button, (0, _extends2["default"])({
    white: true,
    fullWidth: true,
    cursor: "unset"
  }, styled, props), _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true,
    between: true,
    fullWidth: true,
    ml: -25
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    src: blockie,
    maxWidth: 28,
    boxShadow: 0,
    borderRadius: 7,
    border: "1px solid #FFF",
    mx: 10
  })), _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Span, {
    thin: true,
    fontSize: "0.9em"
  }, _react["default"].createElement("strong", null, "\u039EID:"), " ", box.addressShortened), _react["default"].createElement(_designSystemAtoms.Span, {
    pointer: true,
    onClick: box.logout,
    mt: 1
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnf--Q71hav8LNlvIbJ8MGNNOU6gLSj7uYfmYYnWP6kiXDrj5-',
    maxWidth: 14,
    ml: 2
  })))), isMenuAvailable && _react["default"].createElement(_designSystemAtoms.Flex, {
    center: true,
    column: true,
    position: "absolute",
    relative: false,
    top: 0,
    bottom: 0,
    right: -10
  }, _react["default"].createElement(_designSystemOrganisms.Toast, {
    label: "Manage Account",
    content: _react["default"].createElement(AccountManage, null)
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    pointer: true,
    center: true,
    column: true,
    circle: true,
    gradient: "gray",
    boxShadow: 0,
    width: 28,
    height: 28,
    p: 1
  }, _react["default"].createElement(_designSystemAtoms.Span, {
    pointer: true,
    fontSize: ".9em",
    lineHeight: "0",
    heavy: true,
    textRight: true
  }, _react["default"].createElement("strong", null, "\u039E"))))));
};

BoxLoginButton.defaultProps = {
  isMenuAvailable: true,
  auto: false
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(BoxLoginButton, props));
};

exports["default"] = _default;