"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _boxUiState = require("3box-ui-state");

var _effects = require("./effects");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _Login = _interopRequireDefault(require("./Login"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AccessButton = (_ref) => {
  var {
    box,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "children"]);

  var [disabled, setDisabled] = (0, _react.useState)(true);
  var [disabledLabel, setDisabledLabel] = (0, _react.useState)(props.disabledLabel);
  var [label, setEnabledLabel] = (0, _react.useState)(props.label);
  var open = (0, _effects.useOpenRequestEffect)(box);
  var space = (0, _effects.useSpaceReadyEffect)(box, props);
  var thread = (0, _effects.useThreadReadyEffect)(box, props);
  /**
   * @name loginReadyEffect
   * @description Watching open.ready status. 
   * If no further authentication is required tiggle disabled status.
   */

  (0, _react.useEffect)(() => {
    if (open.ready && !props.space) setDisabled(false);
  }, [open.ready]);
  /**
   * @name spaceReadyEffect
   * @description Watch space.ready status. 
   * If no further authentication is required tiggle disabled status.
   */

  (0, _react.useEffect)(() => {
    if (space.ready && !props.threadName) setDisabled(false);
  }, [space]);
  /**
   * @name threadReadyEffect
   * @description Watch thread.ready status. 
   * If no further authentication is required tiggle disabled status.
   */

  (0, _react.useEffect)(() => {
    if (thread.ready) setDisabled(false);
  }, [thread]);
  /**
   * @name autoNameLabelEffect
   * @description Watch thread.ready status. 
   * If no further authentication is required tiggle disabled status.
   */

  (0, _react.useEffect)(() => {
    if (!props.space && !props.threadName) setDisabledLabel('Authentication Required');
    if (props.space && !props.threadName) setDisabledLabel("open ".concat(props.space, " space"));
    if (props.space && props.threadName) setDisabledLabel("join ".concat(props.threadName, " thread"));
  }, [props]);
  return _react.default.createElement(_designSystemAtoms.Button, {
    disabled: disabled,
    type: "submit"
  }, disabled ? _react.default.createElement(Atom.Span, null, disabledLabel) : _react.default.createElement(Atom.Span, null, label));
};

AccessButton.defaultProps = {
  componentLogin: _react.default.createElement(_Login.default, null),
  componentisLoggedIn: _react.default.createElement(_.Avatar, null),
  disabledLabel: 'Requires Authentication',
  label: 'Submit',
  isloginAuto: false,
  isLoginDisabled: false
};
AccessButton.propTypes = {
  componentLogin: _propTypes.default.func,
  isloginAuto: _propTypes.default.bool,
  isLoginDisabled: _propTypes.default.bool
};

var _default = props => _react.default.createElement(_boxUiState.BoxContext, null, box => _react.default.createElement(AccessButton, _extends({
  box: box
}, props)));

exports.default = _default;