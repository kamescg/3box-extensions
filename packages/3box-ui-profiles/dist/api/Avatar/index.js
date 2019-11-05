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

/**
 * @function Avatar
 * @description Display Profile Avatar with menu options.
 * @version 1.0.0
 */

/* --- Global --- */
var Avatar = function Avatar(_ref) {
  var box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box"]);
  return _react["default"].createElement(A.Panel, {
    content: _react["default"].createElement(CMS.ProfilePanel, null)
  }, _react["default"].createElement(A.Flex, {
    center: true,
    column: true
  }, _react["default"].createElement(_boxUiProfilesStateless.ProfileImage, props.styled)));
};

Avatar.defaultProps = {};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(Avatar, props));
};

exports["default"] = _default;