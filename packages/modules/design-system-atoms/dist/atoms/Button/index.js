"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _themeUi = require("theme-ui");

var _react = require("react");

var _styles = require("./styles");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = (_ref) => {
  var {
    as,
    sx,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["as", "sx", "children"]);

  var [styled, setStyled] = (0, _react.useState)({});
  /**
   * @name ButtonTypeEffect
   */

  (0, _react.useEffect)(() => {
    if (props.type) {
      switch (props.type) {
        case 'basic':
          setStyled(_styles.basic);
          break;

        case 'raised':
          setStyled(_styles.raised);
          break;

        default:
          setStyled(_styles.basic);
          break;
      }
    }
  }, [props.type]);
  return (0, _themeUi.jsx)(_themeUi.Styled.div, {
    as: "button",
    sx: _objectSpread({
      variant: props.variant
    }, styled, {}, sx, {}, props),
    children: children
  });
};

Button.defaultProps = {
  type: 'basic'
};
var _default = Button;
exports.default = _default;