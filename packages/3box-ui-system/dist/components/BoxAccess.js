"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

var _BoxSpaceOpen = _interopRequireDefault(require("./BoxSpaceOpen"));

var _ThreadJoin = _interopRequireDefault(require("../api/ThreadJoin"));

var _BoxLoginButton = _interopRequireDefault(require("./BoxLoginButton"));

var _LoginButton = _interopRequireDefault(require("../api/LoginButton"));

var _Login = _interopRequireDefault(require("../api/Login"));

var _effects = require("../api/effects");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxAccess = (_ref) => {
  var {
    level
  } = _ref,
      props = _objectWithoutProperties(_ref, ["level"]);

  return _react.default.createElement(_boxUiState.BoxContext, null, box => _react.default.createElement(_react.default.Fragment, null, level === 'disabled' && props.children, level === 'enabled' && _react.default.createElement(LevelEnabled, _extends({
    box: box
  }, props)), level === 'login' && _react.default.createElement(LevelLogin, _extends({
    box: box
  }, props)), level === 'space' && _react.default.createElement(LevelSpace, _extends({
    box: box
  }, props)), level === 'thread' && _react.default.createElement(LevelThread, _extends({
    box: box
  }, props))));
};

BoxAccess.defaultProps = {
  componentLogin: _react.default.createElement(_LoginButton.default, null),
  componentIsLoggedOut: false,
  componentIsLoading: false,
  componentIsLoggedIn: false,
  componentLoading: null,
  componentSpace: null,
  componentThread: null,
  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isLoginDisabled: false,
  level: 'login',
  space: undefined,
  threadName: undefined,
  styledLogin: {
    variant: 'blue',
    width: '100%'
  },
  styledSpace: {
    variant: 'blue',
    width: '100%'
  },
  styledThread: {
    variant: 'blue',
    width: 1
  }
};
BoxAccess.propTypes = {
  space: _propTypes.default.string,
  threadName: _propTypes.default.string,
  level: _propTypes.default.string
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxAccess, props));
/**
 * @function LevelEnabled
 * @param {*} props 
 */


exports.default = _default;

var LevelEnabled = (_ref2) => {
  var {
    box,
    children
  } = _ref2;
  return box.isEnableSuccess ? children : null;
};
/**
 * @function LevelLogin
 * @param {*} props 
 */


var LevelLogin = (_ref3) => {
  var {
    box,
    styled,
    styledLogin,
    variant,
    componentLogin,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["box", "styled", "styledLogin", "variant", "componentLogin", "children"]);

  var {
    isLoggedIn
  } = box;
  return props.isLoginHidden ? null : !isLoggedIn ? componentLogin ? componentLogin : props.isLoginDisabled ? null : null : children;
};
/**
 * @function LevelSpace
 * @param {*} props 
 */


var LevelSpace = (_ref4) => {
  var {
    box,
    children
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["box", "children"]);

  /* --- State --- */
  var [isLoggedIn, setIsLoggedIn] = (0, _react.useState)(box.isLoggedIn);
  var [spaceAvailable, setIsSpaceAvailable] = (0, _react.useState)(props.sspace);
  /* --- Effects --- */

  (0, _react.useEffect)(() => {
    if (box.isLoggedIn) setIsLoggedIn(true);
  }, [box.isLoggedIn]);
  (0, _react.useEffect)(() => {
    if ((0, _idx.default)(box, _ => _.auth.spaces[props.space].instance)) {
      setIsSpaceAvailable(true);
    }
  }, [(0, _idx.default)(box, _ => _.auth.spaces[props.space].instance)]);
  return _react.default.createElement(_react.default.Fragment, null, !isLoggedIn && !spaceAvailable ? props.isLoginDisabled ? null : _react.default.createElement(_Login.default, {
    isLoggedIn: props.children,
    componentIsLoggedOut: props.componentIsLoggedOut,
    componentIsLoading: props.componentIsLoading,
    componentIsLoggedIn: props.componentIsLoggedIn
  }) : children, isLoggedIn && !spaceAvailable && _react.default.createElement(_BoxSpaceOpen.default, {
    auto: props.spaceAuto,
    space: props.space
  }, _react.default.createElement(_react.default.Fragment, null, props.componentSpace ? props.componentSpace : _react.default.createElement(_designSystemAtoms.Button, props.styledSpace, "open ", props.space, " space"))));
};
/**
 * @function LevelThread
 * @param {*} props 
 */


var LevelThread = (_ref5) => {
  var {
    box,
    space,
    threadName,
    threadAuto,
    spaceAuto,
    variant,
    styled,
    styledLogin,
    styledSpace,
    styledThread,
    componentSpace,
    componentThread,
    componentLogin
  } = _ref5,
      props = _objectWithoutProperties(_ref5, ["box", "space", "threadName", "threadAuto", "spaceAuto", "variant", "styled", "styledLogin", "styledSpace", "styledThread", "componentSpace", "componentThread", "componentLogin"]);

  var {
    isLoggedIn
  } = box;
  var [threadLoaded, setThread] = (0, _react.useState)();
  var [spaceAvailable, setIsSpaceAvailable] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if ((0, _idx.default)(box, _ => _.auth.spaces[space].instance)) {
      setIsSpaceAvailable(true);
    }
  }, [(0, _idx.default)(box, _ => _.auth.spaces[space].instance)]);
  (0, _react.useEffect)(() => {
    if ((0, _idx.default)(box, _ => _.threads[threadName].instance)) {
      setThread(true);
    }
  }, [(0, _idx.default)(box, _ => _.threads[threadName])]);
  return _react.default.createElement(_react.default.Fragment, null, props.componentLoading ? !spaceAvailable && !spaceAuto : props.componentLoading, !isLoggedIn && !spaceAvailable && !threadLoaded ? props.isLoginDisabled ? null : componentLogin : null, isLoggedIn && !spaceAvailable && _react.default.createElement(_BoxSpaceOpen.default, {
    auto: spaceAuto,
    space: space
  }, _react.default.createElement(_react.default.Fragment, null, componentSpace ? componentSpace : _react.default.createElement(_designSystemAtoms.Button, styledSpace, "open ", space, " space"))), isLoggedIn && spaceAvailable && !threadLoaded && _react.default.createElement(_ThreadJoin.default, {
    auto: threadAuto,
    space: space,
    threadName: threadName,
    options: props.optionsThread
  }, _react.default.createElement(_react.default.Fragment, null, componentThread ? componentThread : _react.default.createElement(_designSystemAtoms.Button, styledThread, "Join ", threadName, " Thread"))), isLoggedIn && spaceAvailable && threadLoaded ? props.children : null);
};