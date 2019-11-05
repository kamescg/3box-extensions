/**
 * @name 3BoxContext
 * @description Initialize 3Box context.
 */
/* --- Global --- */
import { createContext } from 'react';
import box from '3box';

/* --- Components --- */
const Context = createContext({
  // Authentiation data storage.
  '@': {},
  auth: {
    instance: undefined,
    spaces: {},
    threads: {}
  },
  // Register onUpdate (thread listening) requests.
  listening: {},
  // Middleware for requests to 3Box.
  requests: [],
  // Manage dispatched requests.
  store: {
    add: [], // Add Moderator or Member
    deletes: [], // Delete Item from Storage (Space) index (key)
    inserts: [], // Insert Item from Storage (Space) index (key)
    listens: [], // Listen for thread updates on callback.
    gets: [],
    open: {},
    posts: [],
    profiles: [],
    removes: [],
    sets: [],
    spaces: [],
    threads: [],
    threadsGet: []
  },
  profile: {},

  // Library
  instance: box, // Login initializes instances.
  static: box,
  utils: box.idUtils,

  // Global Helpers
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,

  // Boolean

  isInitialized: false,
  isRequestOpen: false,
  isEnableAuto: true, // Request ETH Address
  isLoginAuto: false, // Request 3Box Login
  isRequestProfileAuto: true, // Request Profile Auto
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,

  isDebugging: false,

  /* --- Functions --- */
  enable: () => {},
  login: () => {},
  logout: () => {},
  addRequest: () => {},
  confirmRequest: () => {},
  confirmAllRequests: () => {},
  openSpace: () => {},
  listSpaces: () => {},
  subscribedThreads: () => {},
  getThread: () => {},
  getThreadByAddress: () => {},
  getConfig: () => {},
  getVerifiedAccounts: () => {},
  joinThread: () => {},
  joinThreadByAddress: () => {},
  threadPost: () => {},
  threadPostDelete: () => {},
  threadListen: () => {},
  threadAddModerator: () => {},
  threadAddMember: () => {},
  getProfile: () => {},
  lookupProfile: () => {},
  rejectRequest: () => {},
  verified: () => {},
  get: () => {},
  remove: () => {},
  removeItem: () => {},
  set: () => {},
  setMultiple: () => {},
  listAddressLinks: () => {},
  isAddressLinked: () => {},
  linkAddress: () => {},
  removeAddressList: () => {}
});

export default Context;
