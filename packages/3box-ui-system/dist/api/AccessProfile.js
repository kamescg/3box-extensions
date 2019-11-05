"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _boxUiState = require("3box-ui-state");

var _effects = require("./effects");

var _component = require("./component");

var _Login = _interopRequireDefault(require("./Login"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AccessLogin = (_ref) => {
  var {
    box,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "children"]);

  var login = (0, _effects.useOpenRequestEffect)(box);
  return login.isLoggedIn ? children || (0, _component.Component)(props.componentisLoggedIn) : props.componentLogin;
};

AccessLogin.defaultProps = {
  componentLogin: _react.default.createElement(_Login.default, null),
  componentisLoggedIn: _react.default.createElement(_.Avatar, null),
  isloginAuto: false,
  isLoginDisabled: false
};
AccessLogin.propTypes = {
  componentLogin: _propTypes.default.func,
  isloginAuto: _propTypes.default.bool,
  isLoginDisabled: _propTypes.default.bool
};

var _default = props => _react.default.createElement(_boxUiState.BoxContext, null, box => _react.default.createElement(AccessLogin, _extends({
  box: box
}, props)));

exports.default = _default;