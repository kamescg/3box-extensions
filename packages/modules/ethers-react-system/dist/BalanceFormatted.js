"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ethers = require("ethers");

var _designSystem = require("@horizin/design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* --- Global --- */
var BalanceFormatted = (_ref) => {
  var props = Object.assign({}, _ref);
  var [balanceFormatted, setBalance] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (props.balance) {
      var formatted;
      formatted = _ethers.utils.commify( // Human Readable
      _ethers.utils.formatEther( // Handle Decimals
      props.balance // Read Public Function
      ));
      if (formatted) setBalance(formatted);
    }
  }, props.balance);
  /* --- Component --- */

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.Span, props.styled, balanceFormatted));
};

BalanceFormatted.defaultProps = {
  styled: {
    as: 'h2',
    fontWeight: 300,
    fontSize: 4
  }
};
BalanceFormatted.propTypes = {
  balance: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  styled: _propTypes.default.object
};
var _default = BalanceFormatted;
exports.default = _default;