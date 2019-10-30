"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _ethers = require("ethers");

/**
 * @name EthersContext
 * @description Initialize Ethers contenxt.
 */
var Context = (0, _react.createContext)({
  instance: _ethers.ethers,
  store: {
    contracts: [],
    deploy: [],
    messages: [],
    library: [],
    transactions: [],
    wallets: []
  },
  contracts: {},
  library: {},
  deployed: [],
  signatures: {},
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  wallet: undefined,
  enable: () => {},
  loadContractIntoLibrary: () => {},
  initContract: () => {},
  initContractFromLibrary: () => {},
  deployContract: () => {},
  deployContractFromBytecode: () => {},
  setProvider: () => {},
  setProviderStatus: () => {},
  signMessage: () => {},
  signMessageTyped: () => {},
  sendTransction: () => {}
});
var _default = Context;
exports.default = _default;