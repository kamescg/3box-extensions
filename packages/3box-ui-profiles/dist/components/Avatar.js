"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _ProfileImage = require("./ProfileImage");

/**
 * @function Avatar
 * @description Display Profile Avatar with menu options.
 */

/* --- Global --- */
var AvatarView = function AvatarView(_ref) {
  var box = _ref.box,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "children"]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ProfileImage.ProfileImage, {
    opacity: 1
  }));
};

var Avatar = function Avatar(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(AvatarView, props));
};

exports.Avatar = Avatar;