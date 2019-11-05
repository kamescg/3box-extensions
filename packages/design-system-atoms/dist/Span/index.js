"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Flex = _react.default.forwardRef((props, ref) => _react.default.createElement(_Box.default, _extends({
  ref: ref
}, props, {
  __effectKey: "common",
  __variantsKey: "effects.common",
  __css: {
    display: 'inline-block',
    fontSize: 'inherit',
    fontWeight: 'inherit'
  }
})));

exports.Flex = Flex;