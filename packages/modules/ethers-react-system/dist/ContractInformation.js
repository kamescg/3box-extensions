"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _ethersState = require("@kames/ethers-state");

var _FieldAddress = _interopRequireDefault(require("./FieldAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --- Global --- */

/**
 * @function ContractInformation
 * @param {Object} props
 * @returns {Object} React Component 
 */
var ContractInformation = props => {
  /* --- Init Effects --- */

  /* --- Component --- */
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.Box, props.styled, _react.default.createElement(_designSystem.Heading, null, "Contract Information")));
};

ContractInformation.defaultProps = {
  address: undefined,
  contractName: undefined,
  styled: {
    bg: 'white',
    minWidth: 200,
    p: 2
  },
  styledButton: {
    variant: 'green',
    width: '100%'
  },
  styledLabel: {
    fontWeight: 700
  }
};
ContractInformation.propTypes = {
  address: _propTypes.default.string.isRequired,
  contractName: _propTypes.default.string,
  canInitContract: _propTypes.default.bool,
  defaults: _propTypes.default.object,
  label: _propTypes.default.string
};

var _default = props => _react.default.createElement(_ethersState.EthersInject, null, _react.default.createElement(ContractInformation, props));

exports.default = _default;