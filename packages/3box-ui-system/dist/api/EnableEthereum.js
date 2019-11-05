"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _boxUiState = require("3box-ui-state");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _uiCompose = require("@horizin/ui-compose");

var _effects = require("./effects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tag = (_ref) => {
  var {
    label
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label"]);

  return _react.default.createElement(_designSystemAtoms.Span, props, label);
};
/* ---  Component --- */


var EnableEthereum = (_ref2) => {
  var {
    box
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["box"]);

  var enabled = (0, _effects.useEnableEffect)(box);
  return _react.default.createElement(_react.default.Fragment, null, !enabled.dispatched && !enabled.ready && _react.default.createElement("span", {
    onClick: () => box.enable()
  }, (0, _uiCompose.Component)(props.componentIsDisconnected, _objectSpread({
    label: props.disconnectedLabel
  }, props.sxDisconnected))), enabled.dispatched && !enabled.ready ? (0, _uiCompose.Component)(props.componentIsLoading, _objectSpread({
    label: props.loadingLabel
  }, props.sxLoading)) : null, enabled.ready && (props.children || (0, _uiCompose.Component)(props.componentIsConnected, _objectSpread({
    label: props.connectedLabel
  }, props.sxConnected))));
};

EnableEthereum.defaultProps = {
  disconnectedLabel: 'Enable',
  loadingLabel: 'Loading',
  connectedLabel: 'Enabled',
  componentIsDisconnected: Tag,
  componentIsLoading: Tag,
  componentIsConnected: Tag,
  sxDisconnected: {
    pointer: true,
    tag: true
  },
  sxLoading: {
    pointer: true,
    tag: true
  },
  sxConnected: {
    pointer: true,
    tag: true
  }
};
EnableEthereum.propTypes = {
  disconnectedLabel: _propTypes.default.string,
  loadingLabel: _propTypes.default.string,
  connectedLabel: _propTypes.default.string,
  sxDisconnected: _propTypes.default.object,
  sxLoading: _propTypes.default.object,
  sxConnected: _propTypes.default.object,
  componentIsDisconnected: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.elementType]),
  componentIsLoading: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.elementType]),
  componentIsConnected: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.elementType])
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(EnableEthereum, props));

exports.default = _default;