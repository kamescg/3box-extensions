"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortenAddress = shortenAddress;
exports.default = exports.createStringhash = exports.isAddress = exports.trimBalance = exports.hashCode = void 0;

var _ethers = require("ethers");

var hashCode = function hashCode(input) {
  var hash = 0;

  if (input.length == 0) {
    return hash;
  }

  for (var i = 0; i < input.length; i++) {
    var char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  return hash;
};
/**
 * @desc shorten address
 * @param  {String} [address]
 * @param  {Number} [num]
 * @param  {Boolean} [showEnd = true]
 * @return {String}
 */


exports.hashCode = hashCode;

function shortenAddress(address, num) {
  var showEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!address) return null;
  return "".concat(address.slice(0).slice(0, num), "...").concat(showEnd ? address.slice(0).slice(-num) : '');
}

var trimBalance = balance => {
  if (!balance) return null;
  return balance.slice(0, 5);
};
/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean} sinof
*/


exports.trimBalance = trimBalance;

var isAddress = address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  }
  /* TODO: SHAD ADDRESS
    We should also SHA the addresses, but the sha_512 is not the correct one.
    And, I can't find the correct implmementation online. So if it fits, we ships! - @kamescg  */
  // return isChecksumAddress(address);


  return true;
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


var createStringhash = msg => _ethers.utils.solidityKeccak256(["string"], [msg]);

exports.createStringhash = createStringhash;

var createStringMessageSignature = msg => {
  var messageHash = _ethers.utils.solidityKeccak256(["string"], [msg]);

  var messageHashBytes = _ethers.utils.arrayify(messageHash);

  return messageHashBytes;
};

var _default = {
  createStringhash,
  createStringMessageSignature,
  isAddress,
  isChecksumAddress,
  shortenAddress
};
exports.default = _default;