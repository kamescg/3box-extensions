"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utilities = require("../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = props => _react.default.createElement(DID.Context, null, box => _react.default.createElement(A.Flex, _extends({
  circle: true,
  center: true,
  column: true,
  boxShadow: 0,
  p: 2,
  border: "2px solid #FFF",
  overflow: "hidden",
  width: 48,
  height: 48,
  maxWidth: 48,
  maxWidth: 48
}, props), box.profile && box.profile.image ? _react.default.createElement(A.BackgroundImage, {
  ratio: .5,
  circle: true,
  src: (0, _utilities.GenerateImage)(box.profile.image)
}) : _react.default.createElement(A.BackgroundImage, {
  ratio: .5,
  circle: true,
  src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
})));

exports.default = _default;