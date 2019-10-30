"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-personal-space/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-personal-space/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _extends3 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-personal-space/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _react = _interopRequireDefault(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _utilities = require("../utilities");

/* --- Global --- */
var ProfileAvatar = function ProfileAvatar(props) {
  var _extends2;

  return _react["default"].createElement(_designSystemAtoms.Flex, (0, _extends3["default"])((_extends2 = {
    center: true,
    column: true,
    boxShadow: 0,
    p: 2,
    maxWidth: 164
  }, (0, _defineProperty2["default"])(_extends2, "maxWidth", 164), (0, _defineProperty2["default"])(_extends2, "overflow", "hidden"), (0, _defineProperty2["default"])(_extends2, "height", props.dimensions), (0, _defineProperty2["default"])(_extends2, "width", props.dimensions), _extends2), props), props.image ? _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    ratio: .5,
    src: (0, _utilities.GenerateImage)(props.image)
  }) : _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    ratio: .5,
    circle: true,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  }));
};

ProfileAvatar.defaultProps = {
  dimensions: 36
};
var _default = ProfileAvatar;
exports["default"] = _default;