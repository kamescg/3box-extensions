"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (state, action) => {
  switch (action.type) {
    /* ======================= */

    /* Initilization
    /* ======================= */
    case 'ENABLE_REQUEST':
      return _dotPropImmutableChain.default.set(state, 'isEnableRequested', true);

    case 'ENABLE_SUCCESS':
      return _dotPropImmutableChain.default.set(state, 'isEnableSuccess', true);

    case 'ENABLE_FAILURE':
      return _dotPropImmutableChain.default.set(state, 'isEnableSuccess', false);

    case 'SET_ADDRESS':
      return _objectSpread({}, state, {}, action);

    case 'SET_PROFILE':
      return _dotPropImmutableChain.default.set(state, 'profile', action.profile);

    /* ======================= */

    /* Static Requests
    /* ======================= */

    case 'GET_PROFILE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.profiles", [...state.store.profiles, action]).value();

    case 'GET_PROFILE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("profiles.".concat(action.address), action.payload) // Deprecated path
      .set("data.profiles.".concat(action.address), action.payload) // New path
      .set("store.profiles", state.store.profiles.filter(i => i.address !== action.address)).value();

    case 'GET_PROFILE_LIST_REQUEST':
      return _objectSpread({}, state, {
        store: {
          profiles: {
            [action.address]: action
          }
        }
      });

    case 'GET_PROFILE_LIST_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("profiles.".concat(action.address), action.payload) // Deprecated path
      .set("data.profiles.".concat(action.address), action.payload) // New path
      .set("store.profiles", []).value().value();

    /* ======================= */

    /* AUTHENTICATION
    /* ======================= */

    /* OPEN
    /* ------------------ */

    case 'OPEN_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("isLoggingIn", true).value();

    case 'OPEN_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("auth.profile", action.profile).set("auth.verifications", action.verifications).set("auth.spaces", action.spaces).set("instance", action.instance).set("isLogginIn", false).set("isLoggedIn", true).value();

    case 'OPEN_FAILURE':
      return state;

    case 'OPEN_SPACE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.open", [action]).value();

    case 'OPEN_SPACE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("spaces.".concat(action.space, ".instance"), action.instance) // Deprecated path
      .set("spaces.".concat(action.space, ".threads"), action.threads) // Deprecated path
      .set("auth.spaces.".concat(action.space, ".instance"), action.instance) // New path
      .set("auth.spaces.".concat(action.space, ".threads"), action.threads) // New path
      .set("store.open", []).value();

    /* LOGOUT
    /* ------------------ */

    case 'LOGOUT_REQUEST':
      return _objectSpread({}, state, {
        isLoggingOut: true
      });

    case 'LOGOUT_SUCCESS':
      return _objectSpread({}, state, {
        box: undefined,
        isLoggedIn: false,
        spaces: {},
        threads: {}
      });

    case 'LOGOUT_FAILURE':
      return state;

    /* ------------------ */

    /* Get Space
    /* ------------------ */

    case 'GET_SPACE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.spaces", [...state.store.spaces, action]).value();

    case 'GET_SPACE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("spaces.".concat(action.space, ".").concat(action.access), action.payload) // Deprecated path
      .set("data.spaces.".concat(action.address, ".").concat(action.space, ".").concat(action.access), action.payload) // Maybe path
      .set("@.".concat(action.address, ".spaces.").concat(action.space), action.payload) // New path
      .set("store.spaces", []).value();

    case 'GET_SPACE_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.spaces", []).value();

    /* ------------------ */

    /* Get                */

    /* ------------------ */

    case 'GET_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.gets", [...state.store.gets, action]).value();

    case 'GET_SUCCESS':
      if (action.space) {
        return (0, _dotPropImmutableChain.default)(state).set("spaces.".concat(action.space, ".").concat(action.access, ".").concat(action.id), action.payload) // Deprecated path
        .set("data.spaces.".concat(action.space, ".").concat(action.access, ".").concat(action.id), action.payload) // New path
        .set("store.gets", []).value();
      } else {
        return (0, _dotPropImmutableChain.default)(state).set("store.gets", []).value();
      }

    case 'GET_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.gets", []).value();

    /* ------------------ */

    /* Set
    /* ------------------ */

    case 'SET_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", [...state.store.sets, action]).value();

    case 'SET_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", []).value();

    case 'SET_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", []).value();

    case 'SET_INSERT_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", [...state.store.sets, action]).value();

    case 'SET_INSERT_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("profile.".concat(action.index), action.payload).set("auth.profile.".concat(action.index), action.payload).set("store.sets", []).value();

    case 'SET_INSERT_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", []).value();

    case 'SET_MULTIPLE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", [...state.store.sets, action]).value();

    case 'SET_MULTIPLE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", []).value();

    case 'SET_MULTIPLE_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", []).value();

    /* ------------------ */

    /* Insert
    /* ------------------ */

    case 'INSERT_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.inserts", [...state.store.inserts, action]).value();

    case 'INSERT_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("store.inserts", []) // Reset Store
      .set("@.".concat(state.address.toLowerCase(), ".spaces.").concat(action.space, ".").concat(action.index), action.payload).set("auth.spaces.".concat(action.space, ".").concat(action.index), action.payload).value();

    case 'INSERT_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.inserts", []).value();

    /* ------------------ */

    /* Remove                */

    /* ------------------ */

    case 'REMOVE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.removes", [...state.store.removes, action]).value();

    case 'REMOVE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("store.removes", []).value();

    case 'REMOVE_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.removes", []).value();

    /* ------------------ */

    /* Delete             */

    /* ------------------ */

    case 'DELETE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.deletes", [...state.store.deletes, action]).value();

    case 'DELETE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("store.deletes", []).set("@.".concat(state.address.toLowerCase(), ".spaces.").concat(action.space, ".").concat(action.index), action.payload).set("auth.spaces.".concat(action.space, ".").concat(action.access, ".").concat(action.index), action.payload).value();

    case 'DELETE_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.deletes", []).value();

    /* ------------------ */

    /* Thread             */

    /* ------------------ */

    case 'JOIN_THREAD_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.threads", [...state.store.threads, action]).value();

    case 'JOIN_THREAD_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("@.".concat(action.firstModerator, ".threads.").concat(action.space, ".").concat(action.threadName), action.posts).set("auth.threads.".concat(action.threadName), action).set("store.threads", []).value();

    case 'JOIN_THREAD_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.threads", []).value();

    /* Thread Listen
    /* ------------------ */

    case 'THREAD_LISTEN_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.listens", [...state.store.threads, action]).value();

    case 'THREAD_LISTEN_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("listening.".concat(action.id), action).set("store.listens", []).value();

    case 'THREAD_LISTEN_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.listens", []).value();

    /* Thread Get
    /* ------------------ */

    case 'GET_THREAD_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.threadsGet", [...state.store.threadsGet, action]).value();

    case 'GET_THREAD_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("@.".concat(action.firstModerator, ".threads.").concat(action.space, ".").concat(action.threadName), action.payload).set("store.threadsGet", []).value();

    case 'GET_THREAD_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.threadsGet", []).value();

    /* Thread Get by Address
    /* ------------------ */

    case 'GET_THREAD_BY_ADDRESS_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.threads", [...state.store.threads, action]).value();

    case 'GET_THREAD_BY_ADDRESS_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("@.".concat(action.firstModerator, ".threads.").concat(action.threadAddress), action.payload) // Deprecated path
      .set("store.threads", []).value();

    case 'GET_THREAD_BY_ADDRESS_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.threads", []).value();

    /* Thread Post Publish
    /* ------------------ */

    case 'THREAD_POST_PUBLISH_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.posts", [...state.store.posts, action]).value();

    case 'THREAD_POST_PUBLISH_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("@.".concat(action.firstModerator, ".threads.").concat(action.space, ".").concat(action.threadName), action.payload).set("auth.threads.".concat(action.threadName, ".posts"), action.payload).set("store.posts", []).value();

    /* Thread Post Delete
    /* ------------------ */

    case 'THREAD_POST_DELETE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.posts", [...state.store.posts, action]).value();

    case 'THREAD_POST_DELETE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("@.".concat(action.firstModerator, ".threads.").concat(action.space, ".").concat(action.threadName), action.payload).set("auth.threads.".concat(action.threadName, ".posts"), action.payload).set("store.posts", []).value();

    case 'THREAD_POST_DELETE_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.posts", []).value();

    default:
      throw new Error("No Reducer Type Set ".concat(action.type, " "));
  }
};

exports.default = _default;