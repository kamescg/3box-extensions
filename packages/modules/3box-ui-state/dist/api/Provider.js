"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _Context = _interopRequireDefault(require("./Context"));

var _Effects = _interopRequireDefault(require("./Effects"));

var _reducer = _interopRequireDefault(require("./reducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Provider = (_ref) => {
  var {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  var initialState = (0, _react.useContext)(_Context.default);
  var [isInit, setInitialize] = (0, _react.useState)(false);
  var [state, dispatch] = (0, _react.useReducer)(_reducer.default, initialState);
  (0, _Effects.default)(_react.useEffect, state, dispatch);

  if (!isInit && state.isLoginAuto) {
    dispatch({
      type: 'ENABLE_REQUEST'
    });
    setInitialize(true);
  }

  return _react.default.createElement(_Context.default.Provider, {
    value: _objectSpread({}, state, {
      dispatch: dispatch,
      setConfig: config => _objectSpread({}, state.config, {}, config),
      selector: select => (0, _dotPropImmutableChain.default)(state, select),
      // selector: (select) => idxx(state, select),
      open: () => dispatch({
        type: 'OPEN_REQUEST'
      }),
      // deprecate
      login: () => dispatch({
        type: 'OPEN_REQUEST'
      }),
      logout: () => dispatch({
        type: 'logout'
      }),
      enable: () => dispatch({
        type: 'ENABLE_REQUEST'
      }),

      /* -------------------------------- */

      /* Static
      /* -------------------------------- */

      /* --- Profiles (https://docs.3box.io/api/profiles#get) --- */
      getProfile: address => dispatch({
        type: 'GET_PROFILE_REQUEST',
        address
      }),
      getProfileList: addresses => dispatch({
        type: 'GET_PROFILE_LIST_REQUEST',
        address
      }),

      /* --- Spaces (https://docs.3box.io/api/storage#get) --- */
      getSpace: (_ref2) => {
        var {
          address,
          space
        } = _ref2;
        return dispatch({
          type: 'GET_SPACE_REQUEST',
          address: address.toLowerCase(),
          space
        });
      },
      listSpaces: (_ref3) => {
        var {
          address,
          space
        } = _ref3;
        return dispatch({
          type: 'GET_SPACES_REQUEST',
          address,
          space
        });
      },

      /* --- Threads (https://docs.3box.io/api/messaging#static-1) --- */
      getThread: (_ref4) => {
        var {
          space,
          threadName,
          firstModerator,
          members,
          options
        } = _ref4;
        return dispatch({
          type: 'GET_THREAD_REQUEST',
          space,
          threadName,
          firstModerator,
          members,
          options
        });
      },
      getThreadByAddress: (_ref5) => {
        var {
          threadAddress
        } = _ref5;
        return dispatch({
          type: 'GET_THREAD_BY_ADDRESS_REQUEST',
          threadAddress
        });
      },
      listenThread: (_ref6) => {
        var {
          threadAddress,
          threadName
        } = _ref6;
        return dispatch({
          type: 'THREAD_LISTEN_REQUEST',
          threadAddress,
          threadName
        });
      },

      /* -------------------------------- */

      /* Stateful
      /* -------------------------------- */

      /* --- Authentication (https://docs.3box.io/api/auth) --- */
      openSpace: space => dispatch({
        type: 'OPEN_SPACE_REQUEST',
        space
      }),

      /* --- Storage (https://docs.3box.io/api/storage) --- */
      // Default 3Box CRUD
      get: (_ref7) => {
        var {
          key,
          access,
          space
        } = _ref7;
        return dispatch({
          type: 'GET_REQUEST',
          space,
          access,
          key
        });
      },
      set: (_ref8) => {
        var {
          keys,
          key,
          insert,
          inputs,
          access,
          space,
          append,
          update
        } = _ref8;
        return dispatch({
          type: 'SET_REQUEST',
          append: insert || append,
          keys,
          key,
          inputs,
          access,
          space,
          update
        });
      },
      setInsert: (_ref9) => {
        var {
          space,
          access,
          index,
          key,
          input
        } = _ref9;
        return dispatch({
          type: 'SET_INSERT_REQUEST',
          space,
          access,
          index,
          key,
          input
        });
      },
      setMultiple: (_ref10) => {
        var {
          space,
          access,
          keys,
          inputs
        } = _ref10;
        return dispatch({
          type: 'SET_MULTIPLE_REQUEST',
          space,
          access,
          keys,
          inputs
        });
      },
      remove: (_ref11) => {
        var {
          space,
          access,
          key
        } = _ref11;
        return dispatch({
          type: 'REMOVE_REQUEST',
          space,
          access,
          key
        });
      },
      // Enhanced 3Box CRUD

      /**
       * @function insert
       * @description Insert value into object.
       */
      insert: (_ref12) => {
        var {
          space,
          access,
          index,
          key,
          value
        } = _ref12;
        return dispatch({
          type: 'INSERT_REQUEST',
          address: state.address,
          space,
          access,
          index,
          key,
          value
        });
      },

      /**
       * @function delete
       * @description Delete value from object.
       */
      delete: (_ref13) => {
        var {
          space,
          access,
          index,
          key
        } = _ref13;
        return dispatch({
          type: 'DELETE_REQUEST',
          address: state.address,
          space,
          access,
          index,
          key
        });
      },

      /**
       * @function push
       * @description Push value to array
       * @todo ADD THIS FEATURE EVERYWHERE
       */
      push: (_ref14) => {
        var {
          space,
          access,
          index,
          value
        } = _ref14;
        return dispatch({
          type: 'PUSH_REQUEST',
          address: state.address,
          space,
          access,
          index,
          value
        });
      },

      /**
       * @function filter
       * @description Filter array.
       * @todo ADD THIS FEATURE EVERYWHERE
       */
      filter: (_ref15) => {
        var {
          space,
          access,
          index,
          filter: _filter
        } = _ref15;
        return dispatch({
          type: 'FILTER_REQUEST',
          address: state.address,
          space,
          access,
          index,
          filter: _filter
        });
      },

      /* --- Messageing (https://docs.3box.io/api/messaging) --- */
      joinThread: (_ref16) => {
        var {
          space,
          threadName,
          threadAddress,
          options
        } = _ref16;
        return dispatch({
          type: 'JOIN_THREAD_REQUEST',
          space,
          threadName,
          threadAddress,
          options
        });
      },
      threadPost: (_ref17) => {
        var {
          space,
          threadName,
          post
        } = _ref17;
        return dispatch({
          type: 'THREAD_POST_PUBLISH_REQUEST',
          space,
          threadName,
          post
        });
      },
      threadPostDelete: (_ref18) => {
        var {
          space,
          threadName,
          postId
        } = _ref18;
        return dispatch({
          type: 'THREAD_POST_DELETE_REQUEST',
          space,
          threadName,
          postId
        });
      }
    })
  }, children);
};

var _default = Provider;
exports.default = _default;