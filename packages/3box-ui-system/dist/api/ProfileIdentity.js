"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --- Global --- */
var _default = props => _react.default.createElement(DID.Context, null, box => _react.default.createElement(Atom.Span, {
  sm: true,
  thin: true,
  sx: props.sx
}, (0, _idx.default)(box, _ => _['@'][box.address].profile.name)));

exports.default = _default;