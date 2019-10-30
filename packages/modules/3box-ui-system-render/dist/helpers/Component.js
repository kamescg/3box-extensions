"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ethers = require("ethers");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Component = (_ref) => {
  var {
    component,
    pass,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["component", "pass", "styled"]);

  var Component = component;
  return props.data || props.forceRender // Render Array List
  ? Array.isArray(props.data) ? props.data.map((item, index) => {
    return !_react.default.isValidElement(component) ? _react.default.createElement(component, _objectSpread({
      key: _ethers.utils.id(JSON.stringify(item))
    }, item, {}, pass, {}, styled)) : _react.default.cloneElement(component, _objectSpread({
      key: index
    }, item, {}, pass, {}, styled));
  }) // Render Object List
  : props.objectToArray ? Object.keys(props.data).map(itemKey => !_react.default.isValidElement(component) ? _react.default.createElement(component, _objectSpread({
    key: itemKey,
    delta: itemKey,
    data: props.data[itemKey]
  }, props.data[itemKey], {}, pass, {}, styled)) : _react.default.cloneElement(component, _objectSpread({
    key: itemKey,
    delta: itemKey,
    data: props.data[itemKey]
  }, props.data[itemKey], {}, pass, {}, styled))) // Render Object/String
  : _react.default.isValidElement(component) ? _react.default.createElement(component, _objectSpread({
    key: delta,
    delta: props.delta
  }, props.data, {}, pass, {}, styled)) : _react.default.createElement(Component, _extends({
    delta: props.delta
  }, props.data, styled, pass)) : null;
};

Component.defaultProps = {
  component: () => null,
  // Component to render.
  data: undefined,
  // Props for rendered component.
  forceRender: false,
  // Ignore empty data prop
  objectToArray: false,
  // Object.values(data)
  pass: undefined,
  // Pass props to component.
  styled: undefined // Style component.

};
Component.propTypes = {
  component: _propTypes.default.func.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),
  forceRender: _propTypes.default.bool,
  objectToArray: _propTypes.default.bool,
  pass: _propTypes.default.object,
  styled: _propTypes.default.object
};
var _default = Component;
exports.default = _default;