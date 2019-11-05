"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _boxUiProfilesStateless = require("3box-ui-profiles-stateless");

var _ProfileDetails = _interopRequireDefault(require("../ProfileDetails"));

/**
 * @function ProfilePreview
 * @description Display Profile ProfilePreview with menu options.
 * @version 1.0.0
 */

/* --- Global --- */

/* --- Local --- */

/* --- Component --- */
var ProfilePreview = function ProfilePreview(_ref) {
  var box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box"]);
  return _react["default"].createElement(A.Flex, (0, _extends2["default"])({
    alignCenter: true
  }, props.styled), _react["default"].createElement(A.Panel, {
    content: _react["default"].createElement(CMS.ProfilePanel, null)
  }, _react["default"].createElement(_boxUiProfilesStateless.ProfileImage, (0, _extends2["default"])({
    image: box.profile.image
  }, props.styledAvatar))), _react["default"].createElement(_ProfileDetails["default"], {
    styled: {
      ml: 2,
      color: 'white'
    }
  }));
};

ProfilePreview.defaultProps = {
  styled: {},
  styledAvatar: {
    dimensions: 64
  }
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfilePreview, props));
};

exports["default"] = _default;