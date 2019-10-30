"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _BalanceOf = _interopRequireDefault(require("../forms/BalanceOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function ERC20TokenTransferToast
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
var TransferToast = props => {
  /* --- Component --- */
  return _react.default.createElement(_designSystem.Toast, {
    content: _react.default.createElement(Container, props)
  }, props.children);
};

var Container = (_ref) => {
  var {
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styled"]);

  return _react.default.createElement(_designSystem.Box, styled, _react.default.createElement(_BalanceOf.default, props));
};

TransferToast.defaultProps = {};
TransferToast.propTypes = {
  children: _propTypes.default.object.isRequired
};
var _default = TransferToast;
exports.default = _default;