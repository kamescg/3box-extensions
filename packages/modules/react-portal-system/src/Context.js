import { createContext } from 'react';

const Context = createContext({
  store: {
    modals: [],
    toasts: [],
    panels: [],
    popovers: [],
  },
  isBodyOverflowHidden: false,
  isOpen: false,
  open: () => { },
  close: () => { },
  Content: () => null,
  openPanel: () => {},
  openModal: () => {},
});

export default Context;
