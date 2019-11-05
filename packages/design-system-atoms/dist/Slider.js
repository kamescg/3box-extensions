"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var thumb = {
  appearance: 'none',
  width: 16,
  height: 16,
  bg: 'currentcolor',
  border: 0,
  borderRadius: 9999,
  variant: 'forms.slider.thumb'
};

var Slider = _react.default.forwardRef((props, ref) => _react.default.createElement(_Box.default, _extends({
  ref: ref,
  as: "input",
  type: "range",
  variant: "slider"
}, props, {
  __themeKey: "forms",
  __css: {
    display: 'block',
    width: '100%',
    height: 4,
    my: 2,
    cursor: 'pointer',
    appearance: 'none',
    borderRadius: 9999,
    color: 'inherit',
    bg: 'gray',
    ':focus': {
      outline: 'none',
      color: 'primary'
    },
    '&::-webkit-slider-thumb': thumb,
    '&::-moz-range-thumb': thumb,
    '&::-ms-thumb': thumb
  }
})));

exports.Slider = Slider;