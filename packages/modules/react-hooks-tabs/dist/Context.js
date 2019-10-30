"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var Context = (0, _react.createContext)({
  selectedTabId: undefined,
  prevSelectedTabId: undefined,
  variantDefault: undefined,
  setSelectedTabId: () => {
    /* empty */
  },
  dispatch: () => {
    /* empty */
  }
});
var _default = Context;
exports.default = _default;