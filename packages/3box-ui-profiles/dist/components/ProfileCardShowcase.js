"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardShowcase = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _boxUiSystem = require("3box-ui-system");

var _ProfileImage = require("./ProfileImage");

var _ProfileCover = require("./ProfileCover");

var _ProfileIdentity = require("./ProfileIdentity");

var _ProfileDetailsOccupation = require("./ProfileDetailsOccupation");

var _main;

var styles = {
  container: {
    bg: 'night',
    minHeight: 100,
    p: 6
  },
  cover: {
    bg: 'blue',
    borderRadius: '10px 10px 0 0',
    opacity: 0.2,
    minHeight: 100
  },
  avatar: {
    mb: 2,
    mt: -60,
    height: 70,
    width: 70
  },
  main: (_main = {
    bg: 'neutral',
    borderRadius: '0 0 10px 10px',
    border: '1px solid #e0e0e0',
    borderColor: 'borderShadow',
    boxShadow: 0,
    color: 'text'
  }, (0, _defineProperty2["default"])(_main, "color", 'text'), (0, _defineProperty2["default"])(_main, "p", 3), _main)
};
/* --- Component --- */

var ProfileCardShowcaseView = function ProfileCardShowcaseView(_ref) {
  var box = _ref.box,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "children"]);
  return _react["default"].createElement(Atom.Flex, {
    center: true,
    column: true,
    sx: styles.container
  }, _react["default"].createElement(_ProfileCover.ProfileCover, {
    sx: styles.cover
  }), _react["default"].createElement(Atom.Flex, {
    center: true,
    column: true,
    sx: styles.main
  }, _react["default"].createElement(_ProfileImage.ProfileImage, {
    variant: "avatar",
    sx: styles.avatar
  }), _react["default"].createElement(_ProfileIdentity.ProfileIdentity, null), _react["default"].createElement(_ProfileDetailsOccupation.ProfileDetailsOccupation, {
    sx: {
      fontSize: 1,
      fontWeight: 300
    }
  }), _react["default"].createElement(_boxUiSystem.Authenticate, null)));
};

var ProfileCardShowcase = function ProfileCardShowcase(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfileCardShowcaseView, props));
};

exports.ProfileCardShowcase = ProfileCardShowcase;