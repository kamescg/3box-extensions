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

var _SpaceOpen = _interopRequireDefault(require("./SpaceOpen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
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
  var [requestThread, setThreadRequest] = (0, _react.useState)(props.auto);
  var space = (0, _effects.useSpaceOpenRequestEffect)(box, {
    space: props.space,
    request
  });
  var thread = (0, _effects.useThreadJoinEffect)(box, _objectSpread({
    requestJoin: requestThread
  }, props));
  var styleDefault = {
    variants: ['tag'],
    effects: ['white', 'pointer']
  };
  return _react.default.createElement(_react.default.Fragment, null, !login.isDispatched && !login.isLoggedIn && _react.default.createElement(_react.default.Fragment, null, (0, _uiCompose.Component)(props.componentIsLoggedOut, _objectSpread({}, styleDefault, {
    loggedOutLabel: props.loggedOutLabel
  }))), login.isDispatched && !login.isLoggedIn && (0, _uiCompose.Component)(props.componentIsLoading, _objectSpread({}, styleDefault)), login.isLoggedIn && !space.ready && (0, _uiCompose.Component)(_SpaceOpen.default, _objectSpread({}, props, {}, styleDefault)), space.ready && !thread.isDispatched && _react.default.createElement("span", {
    onClick: setThreadRequest
  }, (0, _uiCompose.Component)(props.componentIsLoggedIn, _objectSpread({}, styleDefault))), space.ready && thread.isDispatched && !thread.isReady && (0, _uiCompose.Component)(props.componentThreadRequested, _objectSpread({}, styleDefault)), space.ready && thread.isDispatched && thread.isReady && (0, _uiCompose.Component)(props.componentThreadJoined, _objectSpread({}, styleDefault)));
};

var LoggedOut = props => _react.default.createElement(_designSystemAtoms.Span, props, props.loggedOutLabel);

var Loading = props => _react.default.createElement(_designSystemAtoms.Span, props, "Loading");

var LoggedIn = props => _react.default.createElement(_designSystemAtoms.Span, props, "Open Space Now");

var SpaceRequest = props => _react.default.createElement(_designSystemAtoms.Span, props, "Requesting Access");

var SpaceOpenView = props => _react.default.createElement(_designSystemAtoms.Span, props, "space ", _react.default.createElement("strong", null, props.space), " open");

var ThreadRequest = props => _react.default.createElement(_designSystemAtoms.Span, props, "Joining Thread...");

var ThreadJoined = props => _react.default.createElement(_designSystemAtoms.Span, props, "thread ", _react.default.createElement("strong", null, props.threadName), " joined");

OpenSpace.defaultProps = {
  componentIsLoggedOut: LoggedOut,
  componentIsLoading: Loading,
  componentIsLoggedIn: LoggedIn,
  componentSpaceRequest: SpaceRequest,
  componentSpaceOpen: SpaceOpenView,
  componentThreadRequested: ThreadRequest,
  componentThreadJoined: ThreadJoined,
  loggedOutLabel: 'Authentication Required'
};
OpenSpace.propTypes = {
  spaceAuto: PropTypes.bool,
  loggedOutLabel: PropTypes.string
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(OpenSpace, props));

exports.default = _default;