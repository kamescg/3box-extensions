"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _boxUiProfilesStateless = require("3box-ui-profiles-stateless");

var _Verifications = _interopRequireDefault(require("../Verifications"));

var _ProfilePreview = _interopRequireDefault(require("../ProfilePreview"));

/**
 * @function Showcase
 * @description Display Profile Showcase with menu options.
 * @version 1.0.0
 */

/* --- Global --- */

/* --- Component --- */
var Showcase = function Showcase(_ref) {
  var box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box"]);
  return _react["default"].createElement(A.Box, props.styled, _react["default"].createElement(_boxUiProfilesStateless.ProfileCover, {
    image: box.profile.coverPhoto,
    styled: props.styledCover
  }), _react["default"].createElement(A.Absolute, {
    left: 0,
    right: 0,
    top: 0,
    m: 3
  }, _react["default"].createElement(A.Flex, {
    alignEnd: true,
    between: true,
    flex: 1
  }, _react["default"].createElement(A.Panel, null, _react["default"].createElement(A.Span, {
    xxs: true,
    tag: "white"
  }, "keys")), _react["default"].createElement(A.Span, null, _react["default"].createElement(_Verifications["default"], null)))), _react["default"].createElement(A.Absolute, {
    left: 0,
    right: 0,
    bottom: 0,
    m: 3
  }, _react["default"].createElement(A.Flex, {
    alignEnd: true,
    between: true,
    flex: 1
  }, _react["default"].createElement(_ProfilePreview["default"], null), _react["default"].createElement(A.Panel, null, _react["default"].createElement(A.Span, {
    xs: true,
    tag: "primary"
  }, "Menu")))));
};

Showcase.defaultProps = {
  styled: {
    bg: 'dark',
    minHeight: 200,
    width: 1
  },
  styledAvatar: {
    dimensions: 64
  },
  styledCover: {
    styledContainer: {
      opacity: .2
    }
  }
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(Showcase, props));
};

exports["default"] = _default;