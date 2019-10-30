import idx from 'idx'
export const GenerateImage = image => {
  const IPFSFile = hash => `https://ipfs.io/ipfs/${hash}`
  const imageipfs = idx(image, _=>_[0].contentUrl['/'])
  ? IPFSFile(idx(image, _=>_[0].contentUrl['/']))
  : null
  return imageipfs
}


export const GenerateImagefromHash = image => `https://ipfs.io/ipfs/${image}`

/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean} sinof
*/
export const isAddress = address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  }

  /* TODO: SHAD ADDRESS
    We should also SHA the addresses, but the sha_512 is not the correct one.
    And, I can't find the correct implmementation online. So if it fits, we ships! - @kamescg  */
  // return isChecksumAddress(address);
  return true
};