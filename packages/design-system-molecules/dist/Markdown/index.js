"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ComponentOverrides = {
  p: {
    component: _designSystemAtoms.Paragraph,
    props: {
      as: 'p',
      className: 'p',
      serif: true
    }
  },
  h1: {
    component: _designSystemAtoms.Heading,
    props: {
      as: 'h1'
    }
  },
  h2: {
    component: _designSystemAtoms.Heading,
    props: {
      as: 'h2'
    }
  }
};

var _default = (_ref) => {
  var {
    sx
  } = _ref,
      props = _objectWithoutProperties(_ref, ["sx"]);

  return _react.default.createElement(_markdownToJsx.default, _extends({
    sx: sx,
    options: {
      overrides: ComponentOverrides
    }
  }, props));
};

exports.default = _default;