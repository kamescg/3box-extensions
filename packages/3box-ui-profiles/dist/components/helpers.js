"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortenAddress = shortenAddress;
exports["default"] = exports.createStringhash = exports.isAddress = exports.trimBalance = void 0;

var _ethers = require("ethers");

function shortenAddress(address, num) {
  var showEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!address) return null;
  return "".concat(address.slice(0).slice(0, num), "...").concat(showEnd ? address.slice(0).slice(-num) : '');
}

var trimBalance = function trimBalance(balance) {
  if (!balance) return null;
  return balance.slice(0, 5);
};
/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/


exports.trimBalance = trimBalance;

var isAddress = function isAddress(address) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // check if it has the basic requirements of an address
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    // If it's all small caps or all all caps, return true
    return true;
  } else {
    /* TODO: SHAD ADDRESS
      We should also SHA the addresses, but the sha_512 is not the correct one.
      And, I can't find the correct implmementation online. So if it fits, we ships! - @kamescg  */
    // return isChecksumAddress(address);
    return true;
  }
};
/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/


exports.isAddress = isAddress;

var isChecksumAddress = function isChecksumAddress(address) {
  // Check each case
  address = address.replace('0x', '');

  var addressHash = _ethers.utils.keccak256(address.toLowerCase());

  for (var i = 0; i < 40; i++) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
      return false;
    }
  }

  return true;
};
/**
 * @func createStringhash
 * @desc Pass string into ethers keccak256 hashing function.
 * @param {String} msg 
 */


var createStringhash = function createStringhash(msg) {
  return _ethers.utils.solidityKeccak256(["string"], [msg]);
};

exports.createStringhash = createStringhash;

var createStringMessageSignature = function createStringMessageSignature(msg) {
  var messageHash = _ethers.utils.solidityKeccak256(["string"], [msg]);

  var messageHashBytes = _ethers.utils.arrayify(messageHash);

  return messageHashBytes;
};

var _default = {
  createStringhash: createStringhash,
  createStringMessageSignature: createStringMessageSignature,
  isAddress: isAddress,
  isChecksumAddress: isChecksumAddress
};
exports["default"] = _default;