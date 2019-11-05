"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _box = _interopRequireDefault(require("3box"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function 3BoxCreateContext
 * @description Initial State for 3Box Interface
 */
var Context = (0, _react.createContext)({
  // Authentiation data storage.
  auth: {
    profile: {},
    threads: {},
    spaces: {}
  },
  // Global Configuration
  config: {
    cms: {}
  },
  // General data storage.
  data: {
    profiles: {},
    spaces: {},
    threads: {}
  },
  // Register onUpdate (thread listening) requests.
  listening: {},
  // Middleware for requests to 3Box.
  requests: [],
  // Manage dispatched requests.
  store: {
    add: [],
    // Add Moderator or Member
    deletes: [],
    // Delete Item from Storage (Space) index (key)
    inserts: [],
    // Insert Item from Storage (Space) index (key)
    listens: [],
    // Listen for thread updates on callback.
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
  instance: _box.default,
  // Login initializes instances.
  static: _box.default,
  utils: _box.default.idUtils,
  // Global Helpers
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  // Boolean
  isInitialized: false,
  isRequestOpen: false,
  isEnableAuto: true,
  // Request ETH Address
  isLoginAuto: true,
  // Request 3Box Login
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isDebugging: false,

  /* --- Functions --- */
  open: () => {},
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
var _default = Context;
exports.default = _default;