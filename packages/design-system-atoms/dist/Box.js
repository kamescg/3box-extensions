"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Box = exports.useGradientEffect = void 0;

var _react = require("react");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _css = _interopRequireWildcard(require("@styled-system/css"));

var _shouldForwardProp = require("@styled-system/should-forward-prop");

var _space = _interopRequireDefault(require("@styled-system/space"));

var _color = _interopRequireDefault(require("@styled-system/color"));

var _themeUi = require("theme-ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useGradientEffect = props => {
  var theme = (0, _react.useContext)(_themeUi.Context);
  var [gradient, setGradient] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (props.gradient) setGradient("linear-gradient(180deg , ".concat(theme.gradients[props.gradient]));
  }, [props.gradient]);
  return gradient;
};

exports.useGradientEffect = useGradientEffect;
var shouldForwardProp = (0, _shouldForwardProp.createShouldForwardProp)([..._space.default.propNames, ..._color.default.propNames]);

var sx = props => (0, _css.default)(props.sx)(props.theme);

var base = props => (0, _css.default)(props.__css)(props.theme);

var variant = (_ref) => {
  var {
    theme,
    variant,
    __themeKey = 'variants'
  } = _ref;
  return (0, _css.default)((0, _css.get)(theme, __themeKey + '.' + variant, (0, _css.get)(theme, variant)));
};

var shorthand = (_ref2) => {
  var {
    theme
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["theme"]);

  return Object.keys(props).map(selector => (0, _css.default)((0, _css.get)(theme, "effects.common.".concat(selector))));
};

var variants = (_ref3) => {
  var {
    theme,
    variants,
    __variantsKey = 'variants'
  } = _ref3;
  return Array.isArray(variants) ? variants.map(variant => (0, _css.default)((0, _css.get)(theme, __variantsKey + '.' + variant, (0, _css.get)(theme, variant)))) : null;
};

var variantsShorthand = (_ref4) => {
  var {
    theme,
    __effectKey = 'common'
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["theme", "__effectKey"]);

  return Object.keys(props).map(selector => (0, _css.default)((0, _css.get)(theme, "effects.".concat(__effectKey, ".").concat(selector))));
};

var gradient = (_ref5) => {
  var {
    sx,
    theme,
    gradient,
    __gradientKey = 'gradients'
  } = _ref5;
};

var effects = (_ref6) => {
  var {
    theme,
    effects,
    __effectKey = 'effects'
  } = _ref6;
  return Array.isArray(effects) ? effects.map(effect => (0, _css.default)((0, _css.get)(theme, __effectKey + '.' + effect, (0, _css.get)(theme, effect)))) : null;
};

var Box = (0, _styled.default)('div', {
  shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
  position: 'relative'
}, variants, variant, effects, shorthand, variantsShorthand, gradient, _space.default, _color.default, base, sx, props => props.css);
exports.Box = Box;
var _default = Box;
exports.default = _default;