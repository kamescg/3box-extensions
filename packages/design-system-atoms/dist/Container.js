"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Container = _react.default.forwardRef((props, ref) => _react.default.createElement(_Box.default, _extends({
  ref: ref,
  __effectKey: "common",
  __variantsKey: "effects.common",
  __css: {
    mx: 'auto',
    maxWidth: ['80%', '80%', 780, 1080],
    width: '100%'
  }
}, props)));

exports.Container = Container;