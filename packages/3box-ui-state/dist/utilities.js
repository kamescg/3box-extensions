"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortenAddress = shortenAddress;
exports.default = exports.isAddress = void 0;

function shortenAddress(address, num) {
  var showEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!address) return null;
  return "".concat(address.slice(0).slice(0, num), "...").concat(showEnd ? address.slice(0).slice(-num) : '');
}
/**
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/


var isAddress = address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  } else {
    return true;
  }
};

exports.isAddress = isAddress;
var _default = {
  isAddress,
  shortenAddress
};
exports.default = _default;