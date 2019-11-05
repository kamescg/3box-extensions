"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utilities = require("../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = props => _react.default.createElement(DID.Context, null, box => _react.default.createElement(A.Flex, _extends({
  circle: true,
  center: true,
  column: true,
  boxShadow: 0,
  p: 2,
  sx: _objectSpread({
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 9999,
    maxWidth: 70,
    height: 48,
    width: 48,
    overflow: 'hidden'
  }, props.sx)
}, props), box['@'][box.address] && box['@'][box.address].profile && box['@'][box.address].profile.image ? _react.default.createElement(A.BackgroundImage, {
  ratio: .5,
  circle: true,
  src: (0, _utilities.GenerateImage)(box['@'][box.address].profile.image)
}) : _react.default.createElement(A.BackgroundImage, {
  ratio: .5,
  circle: true,
  src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
})));

exports.default = _default;