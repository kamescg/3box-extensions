"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transfer = _interopRequireDefault(require("./forms/Transfer"));

var _designSystem = require("@horizin/design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* --- Global --- */

/* --- Local --- */

/**
 * @function ERC20TokenTransferToast
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
var TransferToast = props => {
  /* --- Component --- */
  return _react.default.createElement(_designSystem.Toast, {
    content: _react.default.createElement(Container, null)
  }, props.children);
};

var Container = props => {
  return _react.default.createElement(_designSystem.Box, props.styled, _react.default.createElement(_Transfer.default, null));
};

TransferToast.defaultProps = {};
TransferToast.propTypes = {
  children: _propTypes.default.object.isRequired
};
var _default = TransferToast;
exports.default = _default;