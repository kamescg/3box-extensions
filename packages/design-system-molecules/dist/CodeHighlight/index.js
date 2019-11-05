"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeHighlight = void 0;

var _react = _interopRequireDefault(require("react"));

var _prismReactRenderer = _interopRequireWildcard(require("prism-react-renderer"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CodeHighlight = (_ref) => {
  var {
    code,
    children
  } = _ref;
  return _react.default.createElement(_prismReactRenderer.default, _extends({}, _prismReactRenderer.defaultProps, {
    code: code || children,
    language: "jsx"
  }), (_ref2) => {
    var {
      className,
      style,
      tokens,
      getLineProps,
      getTokenProps
    } = _ref2;
    return _react.default.createElement(_designSystemAtoms.Box, {
      sx: {
        p: 0
      }
    }, _react.default.createElement("pre", {
      className: className,
      style: _objectSpread({}, style, {
        borderRadius: 8,
        padding: 18
      })
    }, tokens.map((line, i) => _react.default.createElement("div", getLineProps({
      line,
      key: i
    }), line.map((token, key) => _react.default.createElement("span", getTokenProps({
      token,
      key
    })))))));
  });
};

exports.CodeHighlight = CodeHighlight;