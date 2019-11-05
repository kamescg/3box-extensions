"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("./Box"));

var _SVG = _interopRequireDefault(require("./SVG"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MRE = /^m[trblxy]?$/;

var getProps = test => props => {
  var next = {};

  for (var key in props) {
    if (test(key || '')) next[key] = props[key];
  }

  return next;
};

var getMargin = getProps(k => MRE.test(k));
var omitMargin = getProps(k => !MRE.test(k));

var DownArrow = props => _react.default.createElement(_SVG.default, props, _react.default.createElement("path", {
  d: "M7 10l5 5 5-5z"
}));

var Select = _react.default.forwardRef((props, ref) => _react.default.createElement(_Box.default, _extends({}, getMargin(props), {
  sx: {
    display: 'flex'
  }
}), _react.default.createElement(_Box.default, _extends({
  ref: ref,
  as: "select",
  variant: "select"
}, omitMargin(props), {
  __themeKey: "forms",
  __css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    bg: 'transparent'
  }
})), _react.default.createElement(DownArrow, {
  sx: {
    ml: -28,
    alignSelf: 'center',
    pointerEvents: 'none'
  }
})));

exports.Select = Select;