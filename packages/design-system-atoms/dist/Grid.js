"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var px = n => typeof n === 'number' ? n + 'px' : n;

var widthToColumns = width => Array.isArray(width) ? width.map(widthToColumns) : !!width && "repeat(auto-fit, minmax(".concat(px(width), ", 1fr))");

var countToColumns = n => Array.isArray(n) ? n.map(countToColumns) : !!n && "repeat(".concat(n, ", 1fr)");

var Grid = _react.default.forwardRef((_ref, ref) => {
  var {
    width,
    columns,
    gap = 3
  } = _ref,
      props = _objectWithoutProperties(_ref, ["width", "columns", "gap"]);

  var gridTemplateColumns = !!width ? widthToColumns(width) : countToColumns(columns);
  return _react.default.createElement(_Box.default, _extends({
    ref: ref
  }, props, {
    __themeKey: "grids",
    __css: {
      display: 'grid',
      gridGap: gap,
      gridTemplateColumns
    }
  }));
});

exports.Grid = Grid;