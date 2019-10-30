"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ethersState = require("@kames/ethers-state");

var _ERC20InitialSupply = _interopRequireDefault(require("./contracts/ERC20InitialSupply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function ERC20TokenInitialize
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
var Initialize = (_ref) => {
  var {
    ethers
  } = _ref,
    props = _objectWithoutProperties(_ref, ["ethers"]);

  var [isInitialized, setInitialized] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (!isInitialized && props.address && (props.abi || props.contract)) {
      console.log(ethers, props, 'init conttract');
      ethers.initContract({
        address: props.address,
        abi: _ERC20InitialSupply.default.abi,
        contractType: props.contractType
      });
    }

    setInitialized(true);
  }, [props.address, props.abi, props.contract, props.contractType, ethers]);
  /* --- Component --- */

  return null;
};

Initialize.defaultProps = {
  address: undefined,
  abi: _ERC20InitialSupply.default.abi,
  contractType: 'token'
};
Initialize.propTypes = {
  address: _propTypes.default.string.isRequired,
  abi: _propTypes.default.object,
  contract: _propTypes.default.object
};

var _default = props => _react.default.createElement(_ethersState.EthersInject, null, _react.default.createElement(Initialize, props));

exports.default = _default;