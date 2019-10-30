export function shortenAddress(address, num, showEnd = true) {
  if (!address) return null
  return `${address.slice(0).slice(0, num)}...${showEnd ? address.slice(0).slice(-num) : ''}`;
}
/**
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
export const isAddress = address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  } else {
    return true
  }
};

export default {
  isAddress,
  shortenAddress,
}