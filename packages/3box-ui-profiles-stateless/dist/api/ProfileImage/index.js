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
var _default = function _default(props) {
  var _extends2;

  return _react["default"].createElement(_designSystemAtoms.Flex, (0, _extends3["default"])((_extends2 = {
    circle: true,
    center: true,
    column: true,
    boxShadow: 0,
    p: 2,
    variant: "avatar",
    border: "2px solid #FFF",
    overflow: "hidden",
    maxWidth: 124
  }, (0, _defineProperty2["default"])(_extends2, "maxWidth", 124), (0, _defineProperty2["default"])(_extends2, "height", props.dimensions), (0, _defineProperty2["default"])(_extends2, "width", props.dimensions), _extends2), props), props.image ? _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    ratio: .5,
    circle: true,
    src: (0, _utilities.GenerateImage)(props.image)
  }) : _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    ratio: .5,
    circle: true,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  }));
};

exports["default"] = _default;