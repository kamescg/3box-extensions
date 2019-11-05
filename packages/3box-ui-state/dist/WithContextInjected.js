"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Context = _interopRequireDefault(require("./Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withContextInjected = (_ref) => {
  var {
    children
  } = _ref;
  return _react.default.createElement(_Context.default.Consumer, null, box => children && Array.isArray(children) ? children.map(child => _react.default.cloneElement(child, {
    box
  })) : _react.default.cloneElement(children, {
    box
  }));
};

var _default = withContextInjected;
exports.default = _default;