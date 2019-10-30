"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _themeUi = require("theme-ui");

var _router = require("@reach/router");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = props => (0, _themeUi.jsx)(_router.Link, _extends({
  sx: {
    color: 'inherit',
    '&.active': {
      color: 'primary'
    }
  }
}, props));

exports.default = _default;