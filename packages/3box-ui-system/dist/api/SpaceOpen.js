"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

var _uiCompose = require("@horizin/ui-compose");

var _effects = require("./effects");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OpenSpace = (_ref) => {
  var {
    box,
    isMenuAvailable,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "isMenuAvailable", "styled"]);

  // Login Status
  var login = (0, _effects.useOpenRequestEffect)(box); // Space Access Request

  var [request, setRequest] = (0, _react.useState)(props.auto);
  var space = (0, _effects.useSpaceOpenRequestEffect)(box, {
    space: props.space,
    request
  });
  var spacess = (0, _effects.useSpaceReadyEffect)(box, props);
  var styleDefault = {
    variants: ['tag'],
    effects: ['white', 'pointer']
  };
  return _react.default.createElement(_react.default.Fragment, null, !login.isDispatched && !login.isLoggedIn && _react.default.createElement(_react.default.Fragment, null, (0, _uiCompose.Component)(props.componentIsLoggedOut, _objectSpread({}, styleDefault, {
    loggedOutLabel: props.loggedOutLabel
  }))), login.isDispatched && !login.isLoggedIn && (0, _uiCompose.Component)(props.componentIsLoading, _objectSpread({}, styleDefault)), login.isLoggedIn && !space.loading && !space.ready && _react.default.createElement("span", {
    onClick: setRequest
  }, (0, _uiCompose.Component)(props.componentIsLoggedIn, _objectSpread({}, styleDefault))), login.isLoggedIn && space.loading && !space.ready && (0, _uiCompose.Component)(props.componentSpaceRequest, _objectSpread({}, styleDefault)), login.isLoggedIn && space.ready && (0, _uiCompose.Component)(props.componentSpaceOpen, _objectSpread({}, styleDefault, {
    space: props.space
  })));
};

var LoggedOut = props => _react.default.createElement(_designSystemAtoms.Span, props, props.loggedOutLabel);

var Loading = props => _react.default.createElement(_designSystemAtoms.Span, props, "Loading");

var LoggedIn = props => _react.default.createElement(_designSystemAtoms.Span, _extends({
  pointer: true,
  bgWhite: true,
  cNight: true
}, props), "Open Space Now");

var SpaceRequest = props => _react.default.createElement(_designSystemAtoms.Span, props, "Requesting Access");

var SpaceOpen = props => _react.default.createElement(_designSystemAtoms.Span, props, "space ", _react.default.createElement("strong", null, props.space), " open");

OpenSpace.defaultProps = {
  componentIsLoggedOut: LoggedOut,
  componentIsLoading: Loading,
  componentIsLoggedIn: LoggedIn,
  componentSpaceRequest: SpaceRequest,
  componentSpaceOpen: SpaceOpen,
  loggedOutLabel: 'Authentication Required'
};
OpenSpace.propTypes = {
  spaceAuto: PropTypes.bool,
  loggedOutLabel: PropTypes.string
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(OpenSpace, props));

exports.default = _default;