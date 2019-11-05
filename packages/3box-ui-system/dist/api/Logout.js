"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _uiCompose = require("@horizin/ui-compose");

var _effects = require("./effects");

var _EnableEthereum = _interopRequireDefault(require("./EnableEthereum"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* ---  Sub-Component --- */
var Tag = (_ref) => {
  var {
    label
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label"]);

  return _react.default.createElement(_designSystemAtoms.Span, props, label);
};
/* --- Component --- */


var Login = (_ref2) => {
  var {
    box
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["box"]);

  var enabled = (0, _effects.useEnableEffect)(box);
  var login = (0, _effects.useOpenRequestEffect)(box);
  return _react.default.createElement(_react.default.Fragment, null, !enabled.ready && _react.default.createElement(_EnableEthereum.default, null), enabled.ready && !login.isDispatched && !login.isLoggedIn ? _react.default.createElement("span", {
    onClick: box.login
  }, (0, _uiCompose.Component)(props.componentLoggedOut, _objectSpread({
    label: props.loggedOutLabel
  }, props.sxLoggedOut))) : null, login.isDispatched && !login.isLoggedIn ? (0, _uiCompose.Component)(props.componentLoading, _objectSpread({
    label: props.loadingLabel
  }, props.sxLoading)) : null, login.isLoggedIn && _react.default.createElement("span", {
    onClick: box.logout
  }, props.children || (0, _uiCompose.Component)(props.componentLoggedIn, _objectSpread({
    label: props.loggedInLabel
  }, props.sxLoggedIn))));
};

Login.defaultProps = {
  loggedOutLabel: 'Login',
  loadingLabel: 'Loading...',
  loggedInLabel: 'Logout',
  componentLoggedOut: Tag,
  componentLoading: Tag,
  componentLoggedIn: Tag,
  display: 'tag',
  sxLoggedOut: {
    pointer: true,
    tag: true
  },
  sxLoading: {
    pointer: true,
    tag: true
  },
  sxLoggedIn: {
    pointer: true,
    tag: true
  }
};
Login.propTypes = {
  spaceAuto: PropTypes.bool
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(Login, props));

exports.default = _default;