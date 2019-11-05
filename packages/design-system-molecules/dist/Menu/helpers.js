"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activateMenu = void 0;

var activateMenu = (_ref) => {
  var {
    isCurrent,
    isPartiallyCurrent
  } = _ref;
  return {
    style: {
      background: isPartiallyCurrent ? 'blue' : "inherit",
      color: isPartiallyCurrent ? 'red' : "inherit"
    }
  };
};

exports.activateMenu = activateMenu;