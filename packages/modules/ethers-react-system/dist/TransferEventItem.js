"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-system/dist");

var _BalanceFormatted = _interopRequireDefault(require("./BalanceFormatted"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* ========== Component ========== */
var TransferEventItem = (_ref) => {
  var props = Object.assign({}, _ref);
  return _react.default.createElement(_designSystem.Flex, _extends({
    alignCenter: true
  }, props.styled), _react.default.createElement(_designSystem.Box, {
    flex: 1
  }, _react.default.createElement(_dist.BoxProfileRetrieve, {
    address: props.decoded.from
  })), _react.default.createElement(_designSystem.Box, {
    flex: 1
  }, _react.default.createElement(_dist.BoxProfileRetrieve, {
    address: props.decoded.to
  })), _react.default.createElement(_designSystem.Box, {
    flex: 1
  }, _react.default.createElement("strong", null, "Amount:"), " ", _react.default.createElement(_BalanceFormatted.default, {
    balance: props.decoded.value
  })));
};

TransferEventItem.defaultProps = {
  styled: {
    as: 'h5',
    fontSize: 2
  },
  styledLabel: {
    fontWeight: 700
  }
};
TransferEventItem.propTypes = {
  decoded: _propTypes.default.object.isRequired,
  styled: _propTypes.default.object,
  styledLabel: _propTypes.default.object
};
var _default = TransferEventItem;
exports.default = _default;