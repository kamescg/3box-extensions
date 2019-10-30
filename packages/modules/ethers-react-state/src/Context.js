import { createContext } from 'react';
import { ethers } from 'ethers';
var crypto = require('crypto-browserify');

const Context = createContext({
  instance: ethers,
  store: {
    contracts: [],
    deploy: [],
    messages: [],
    library: [],
    transactions: [],
    wallets: [],
  },
  contracts: {},
  library: {},
  deployed: [],
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  wallet: undefined,
  signMessage: () => { },
  sendTrnsaction: () => { },
});

export default Context;
