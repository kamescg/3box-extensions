/**
 * @name EthersContext
 * @description Initialize Ethers contenxt.
 */

import { createContext } from 'react';
import { ethers } from 'ethers';

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
  signatures: {},
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  wallet: undefined,
  enable: () => { },
  loadContractIntoLibrary: () => { },
  initContract: () => { },
  initContractFromLibrary: () => { },
  deployContract: () => { },
  deployContractFromBytecode: () => { },
  setProvider: () => { },
  setProviderStatus: () => { },
  signMessage: () => { },
  signMessageTyped: () => { },
  sendTransction: () => { },
});

export default Context;
