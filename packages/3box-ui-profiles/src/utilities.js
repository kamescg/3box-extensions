import idx from 'idx'
export const GenerateImage = image => {
  const IPFSFile = hash => `https://ipfs.io/ipfs/${hash}`
  const imageipfs = idx(image, _=>_[0].contentUrl['/'])
  ? IPFSFile(idx(image, _=>_[0].contentUrl['/']))
  : null
  return imageipfs
}

export const GenerateImagefromHash = image => `https://ipfs.io/ipfs/${image}`