"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _boxUiState = require("3box-ui-state");

var _Component = _interopRequireDefault(require("../helpers/Component"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var ProfileSelector = (_ref) => {
  var {
    box,
    selector
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "selector"]);

  /* --- Iternal State --- */
  var [selection, setSelection] = (0, _react.useState)();
  var [dispatched, setDispatched] = (0, _react.useState)();
  /* --- Passed State --- */

  var [address, setAddress] = (0, _react.useState)(props.address);
  /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */

  var LoadGlobalConfigurationEffect = () => (0, _react.useEffect)(() => {}, [address]);
  /**
   * @function GetProfileEffect
   * @description IF proper conditions are met request space.
   */


  var GetProfileEffect = () => (0, _react.useEffect)(() => {
    if (address && !dispatched) {
      box.getProfile(address);
      setDispatched(true);
    }
  }, [address, dispatched]);
  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */


  var SetSelectionEffect = () => (0, _react.useEffect)(() => {
    setSelection((0, _dotPropImmutableChain.default)(box).get("data.profiles.".concat(address)).value());
  }, [(0, _dotPropImmutableChain.default)(box).get("data.profiles.".concat(address)).value()]);
  /* --- Init Effects ---*/


  if (props.isGlobalConfig) LoadGlobalConfigurationEffect();
  if (props.canRequestData) GetProfileEffect();
  if (props.isRefresh) SetSelectionEffect();
  /* --- Return Component ---*/

  return _react.default.createElement(_Component.default, {
    selection: selection,
    pass: props.pass,
    component: props.component
  });
};

ProfileSelector.defaultProps = {
  canRequestData: true,
  component: () => null,
  isGlobalConfig: true,
  isRefresh: true
};
ProfileSelector.propTypes = {
  address: _propTypes.default.string,
  canRequestData: _propTypes.default.bool,
  component: _propTypes.default.func.isRequired,
  isGlobalConfig: _propTypes.default.bool,
  isRefresh: _propTypes.default.bool,
  selector: _propTypes.default.string
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(ProfileSelector, props));

exports.default = _default;