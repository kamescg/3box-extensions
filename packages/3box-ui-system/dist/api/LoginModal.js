"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

var _effects = require("./effects");

var _BoxLoginCard = _interopRequireDefault(require("../components/BoxLoginCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var Login = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var [isOpen, setIsOpen] = (0, _react.useState)(true);
  var [request, setRequest] = (0, _react.useState)();
  var login = (0, _effects.useOpenRequestEffect)(box, {
    request
  });
  (0, _react.useEffect)(() => {
    if (box.isLoggedIn) setIsOpen(false);
  }, [box.isLoggedIn]);
  /* --- Effects --- */

  return !isOpen ? null : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Atom.Fixed, {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1000
  }, _react.default.createElement(Atom.BackgroundGradient, {
    gradient: "black",
    opacity: .6
  }), _react.default.createElement(Atom.Flex, {
    center: true,
    column: true,
    flex: 1,
    height: "100%"
  }, _react.default.createElement(Atom.Box, {
    maxWidth: 400
  }, !login.isLoggedIn ? !_react.default.isValidElement(props.componentIsLoggedOut) ? _react.default.createElement(props.componentIsLoggedOut) : props.componentIsLoading || null : !_react.default.isValidElement(props.componentIsLoggedIn) ? _react.default.createElement(props.componentIsLoggedIn) : props.componentIsLoading || null))));
};

Login.defaultProps = {
  componentIsLoggedOut: _react.default.createElement(Atom.Box, null),
  componentIsLoading: _react.default.createElement(Atom.Box, null),
  componentIsLoggedIn: _react.default.createElement(Atom.Box, null)
};
Login.propTypes = {
  spaceAuto: PropTypes.bool
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(Login, props));

exports.default = _default;