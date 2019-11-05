"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocationEffect = exports.useFontWeightEffect = exports.useFlexEffect = exports.useFontSizeEffect = exports.useStylesEffect = exports.useGradientEffect = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _core = require("@emotion/core");

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useGradientEffect = props => {
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var [gradient, setGradient] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (props.gradient) setGradient("linear-gradient(180deg , ".concat((0, _idx.default)(theme, _ => _.gradient[props.gradient]), ")"));
  }, [props.gradient]);
  return gradient;
};
/**
 * @function useStylesEffect
 * @description Manage general box, flex and other layout commands.
 * @param {*} props 
 */


exports.useGradientEffect = useGradientEffect;

var useStylesEffect = props => {
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var [styled, setStyled] = (0, _react.useState)();
  var [gradient, setGradient] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (props.gradient) setGradient("linear-gradient(180deg , ".concat((0, _idx.default)(theme, _ => _.gradient[props.gradient]), ")"));
  }, [props.gradient]);
  (0, _react.useEffect)(() => {
    if (gradient) setStyled(_objectSpread({}, styled, {
      backgroundImage: gradient
    }));
  }, [gradient]);
  return styled;
};
/**
 * @function useFontSizeEffect
 * @description Manage general box, flex and other layout commands.
 * @param {*} props 
 */


exports.useStylesEffect = useStylesEffect;

var useFontSizeEffect = props => {
  var [size, setStyled] = (0, _react.useState)(1);
  (0, _react.useEffect)(() => {
    if (props.xxs) setStyled(0);
    if (props.xs) setStyled(1);
    if (props.sm) setStyled(2);
    if (props.md) setStyled(3);
    if (props.lg) setStyled(4);
    if (props.xl) setStyled(5);
    if (props.xxl) setStyled(6);
    if (props.giga) setStyled(6);
  }, [props.xxs || props.xs || props.sm || props.md || props.lg || props.xxl || props.giga]);
  return size;
};
/**
 * @function useFlexEffect
 * @description Font Weight Shorthand
 * @param {*} props 
 */


exports.useFontSizeEffect = useFontSizeEffect;

var useFlexEffect = props => {
  var [flexed, setStyled] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    var shadow = {};
    if (props.center) shadow = _objectSpread({}, shadow, {
      alignItems: 'center',
      justifyContent: 'center'
    });
    if (props.column) shadow = _objectSpread({}, shadow, {
      flexDirection: 'column'
    });
    if (props.alignCenter) shadow = _objectSpread({}, shadow, {
      alignItems: 'center'
    });
    setStyled(shadow);
  }, [props.center || props.column || props.alignCenter]);
  return flexed;
};
/**
 * @function useFontWeightEffect
 * @description Font Weight Shorthand
 * @param {*} props 
 */


exports.useFlexEffect = useFlexEffect;

var useFontWeightEffect = props => {
  var [weight, setStyled] = (0, _react.useState)(1);
  (0, _react.useEffect)(() => {
    if (props.thin) setStyled(300);
    if (props.normal) setStyled(500);
    if (props.bold) setStyled(700);
    if (props.heavy) setStyled(800);
  }, [props.thin || props.normal || props.bold || props.heavy]);
  return weight;
};
/**
 * @function useLocationEffect
 * @description Font Weight Shorthand
 * @param {*} props 
 */


exports.useFontWeightEffect = useFontWeightEffect;

var useLocationEffect = props => {
  var [location, setStyled] = (0, _react.useState)(1);
  (0, _react.useEffect)(() => {
    if (props.topLeft) setStyled({
      top: 0,
      left: 0
    });
    if (props.topRight) setStyled({
      top: 0,
      right: 0
    });
    if (props.bottomRight) setStyled({
      bottom: 0,
      right: 0
    });
    if (props.bottomLeft) setStyled({
      bottom: 0,
      right: 0
    });
  }, [props.topLeft || props.topRight || props.bottomLeft || props.bottomRight]);
  return location;
};

exports.useLocationEffect = useLocationEffect;