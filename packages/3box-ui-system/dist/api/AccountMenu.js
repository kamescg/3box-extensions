"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _Logout = _interopRequireDefault(require("./Logout"));

var _ProfileIdentity = _interopRequireDefault(require("./ProfileIdentity"));

var _effects = require("./effects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Login = (_ref) => {
  var {
    sxLoggedOut,
    sxLoading,
    sxLoggedIn,
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["sxLoggedOut", "sxLoading", "sxLoggedIn", "box"]);

  var login = (0, _effects.useOpenRequestEffect)(box);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
    onClick: box.login
  }, !login.isDispatched && !login.isLoggedIn ? !_react.default.isValidElement(props.componentIsLoggedOut) ? _react.default.createElement(props.componentIsLoggedOut) : props.componentIsLoggedOut || null : null), _react.default.createElement("span", null, login.isDispatched && !login.isLoggedIn ? !_react.default.isValidElement(props.componentIsLoading) ? _react.default.createElement(props.componentIsLoading) : props.componentIsLoading || null : null), login.isLoggedIn && _react.default.createElement("span", null, props.children || !_react.default.isValidElement(props.componentIsLoggedIn) ? _react.default.createElement(props.componentIsLoggedIn) : props.componentIsLoggedIn || null));
};

Login.defaultProps = {
  componentIsLoggedOut: _react.default.createElement(_designSystemAtoms.Span, {
    variants: ['tag'],
    effects: ['white', 'pointer']
  }, "Login"),
  componentIsLoading: _react.default.createElement(_designSystemAtoms.Span, {
    variants: ['tag'],
    effects: ['white']
  }, "Loading"),
  componentIsLoggedIn: _react.default.createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react.default.createElement(_Avatar.default, null), _react.default.createElement(Atom.Box, {
    sx: {
      ml: 2
    }
  }, _react.default.createElement(_ProfileIdentity.default, null), _react.default.createElement("br", null), _react.default.createElement(_Logout.default, null)))
};
Login.propTypes = {
  spaceAuto: PropTypes.bool
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(Login, props));

exports.default = _default;