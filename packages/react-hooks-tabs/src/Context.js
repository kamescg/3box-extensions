import { createContext } from 'react';

const Context = createContext({
  selectedTabId: undefined,
  prevSelectedTabId: undefined,
  variantDefault: undefined,
  setSelectedTabId: () => {/* empty */},
  dispatch: () => {/* empty */},
});

export default Context;
