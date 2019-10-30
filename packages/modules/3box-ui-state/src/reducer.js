/* eslint-disable complexity */
import dot from 'dot-prop-immutable-chain'

export default (state, action) => {
  switch (action.type) {

    /* ======================= */
    /* Initilization
    /* ======================= */

    case 'ENABLE_REQUEST':
      return dot.set(state, 'isEnableRequested', true)
    case 'ENABLE_SUCCESS':
      return dot.set(state, 'isEnableSuccess', true)
    case 'ENABLE_FAILURE':
      return dot.set(state, 'isEnableSuccess', false)

    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
        addressShortened: action.addressShortened,
        addressTrimmed: action.addressTrimmed
      };

    case 'SET_PROFILE':
      return dot.set(state, `@.${state.address}.profile`, action.profile)

    /* ======================= */
    /* Static Requests
    /* ======================= */
    case 'GET_PROFILE_REQUEST':
      return dot(state).set(`store.profiles`, [...state.store.profiles, action]).value()
    case 'GET_PROFILE_SUCCESS':
      return dot(state)
        .set(`@.${action.address}.profile`, action.payload) // New path
        .value()

    case 'GET_PROFILE_LIST_REQUEST':
      return {
        ...state,
        store: {
          profiles: {
            [action.address]: action
          }
        }
      };
    case 'GET_PROFILE_LIST_SUCCESS':
      return dot(state)
        // .set(`profiles.${action.address}`, action.payload) // Deprecated path
        // .set(`data.profiles.${action.address}`, action.payload) // New path
        .set(`store.profiles`, [])
        .value()
        .value()

    /* ======================= */
    /* AUTHENTICATION
    /* ======================= */

    /* OPEN
    /* ------------------ */
    case 'OPEN_REQUEST':
      return dot(state).set(`isLoggingIn`, true).value()
    case 'OPEN_SUCCESS':
      return dot(state)
        .set(`@.${state.address}.profile`, action.profile) // New path
        .set(`auth.verifications`, action.verifications)
        .set(`auth.spaces`, action.spaces)
        .set(`auth.instance`, action.instance)
        .set(`instance`, action.instance)
        .set(`isLogginIn`, false)
        .set(`isLoggedIn`, true)
        .value()
    case 'OPEN_FAILURE':
      return state

    case 'OPEN_SPACE_REQUEST':
      return dot(state).set(`store.open`, [action]).value()

    case 'OPEN_SPACE_SUCCESS':
      return dot(state)
        .set(`spaces.${action.space}.instance`, action.instance) // Deprecated path
        .set(`spaces.${action.space}.threads`, action.threads) // Deprecated path
        .set(`auth.spaces.${action.space}.instance`, action.instance) // New path
        .set(`auth.spaces.${action.space}.threads`, action.threads) // New path
        .set(`store.open`, [])
        .value()


    /* LOGOUT
    /* ------------------ */
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        box: undefined,
        isLoggedIn: false,
        spaces: {},
        threads: {}
      };
    case 'LOGOUT_FAILURE':
      return state

    /* ------------------ */
    /* Get Space
    /* ------------------ */
    case 'GET_SPACE_REQUEST':
      return dot(state).set(`store.spaces`, [...state.store.spaces, action]).value()
    case 'GET_SPACE_SUCCESS':
      return dot(state)
        .set(`spaces.${action.space}.${action.access}`, action.payload) // Deprecated path
        .set(`data.spaces.${action.address}.${action.space}.${action.access}`, action.payload) // Maybe path
        .set(`@.${action.address}.spaces.${action.space}.${action.access}`, {}) // New path
        .set(`store.spaces`, [])
        .value()
    case 'GET_SPACE_FAILURE':
      return dot(state).set(`store.spaces`, []).value()


    /* ------------------ */
    /* Get                */
    /* ------------------ */
    case 'GET_REQUEST':
      return dot(state).set(`store.gets`, [...state.store.gets, action]).value()
    case 'GET_SUCCESS':
      if (action.space) {
        return dot(state)
          .set(`@.${state.address}.spaces.${action.space}.${action.access}.${action.key}`, action.payload)
          .set(`store.gets`, [])
          .value()
      } else {
        return dot(state)
        .set(`@.${state.address}.profile.${action.key}`, action.payload)
        .set(`auth.profile.${action.key}`, action.payload)
        .set(`store.gets`, [])
        .value()
      }
    case 'GET_FAILURE':
      return dot(state).set(`store.gets`, []).value()

    /* ------------------ */
    /* Set
    /* ------------------ */
    case 'SET_REQUEST':
      return dot(state).set(`store.sets`, [...state.store.sets, action]).value()
    case 'SET_SUCCESS':
      return dot(state).set(`store.sets`, []).value()
    case 'SET_FAILURE':
      return dot(state).set(`store.sets`, []).value()

    case 'SET_SINGLE_REQUEST':
      return dot(state).set(`store.sets`, [...state.store.sets, action]).value()
    case 'SET_SINGLE_SUCCESS':
      return dot(state).set(`store.sets`, []).value()
    case 'SET_SINGLE_FAILURE':
      return dot(state).set(`store.sets`, []).value()

    case 'SET_MULTIPLE_REQUEST':
      return dot(state).set(`store.sets`, [...state.store.sets, action]).value()
    case 'SET_MULTIPLE_SUCCESS':
      return dot(state).set(`store.sets`, []).value()
    case 'SET_MULTIPLE_FAILURE':
      return dot(state).set(`store.sets`, []).value()

    case 'SET_MERGE_REQUEST':
      return dot(state).set(`store.sets`, [...state.store.sets, action]).value()
    case 'SET_MERGE_SUCCESS':
      if(!action.space) {
        return dot(state)
          .set(`@.${state.address}.profile.${action.index}`, action.payload)
          .set(`store.sets`, [])
          .value()
      } else {
        return dot(state)
          .set(`@.${state.address}.spaces.${action.space}.${action.access}.${action.key}`, action.payload)
          .set(`store.sets`, [])
          .value()
      }
      case 'SET_MERGE_FAILURE':
        return dot(state).set(`store.sets`, []).value()
        

    /* ------------------ */
    /* Insert
    /* ------------------ */
    case 'INSERT_REQUEST':
      return dot(state).set(`store.inserts`, [...state.store.inserts, action]).value()
    case 'INSERT_SUCCESS':
      if(!action.space) {
        return dot(state)
          .set(`@.${state.address}.profile.${action.index}`, action.payload)
          .set(`store.inserts`, []) // Reset Store
          .value()
      } else {
        return dot(state)
          .set(`@.${state.address}.spaces.${action.space}.${action.access}.${action.index}`, action.payload)
          .set(`store.inserts`, []) // Reset Store
          .value()
      }
    case 'INSERT_FAILURE':
      return dot(state).set(`store.inserts`, []).value()

    /* ------------------ */
    /* Remove                */
    /* ------------------ */
    case 'REMOVE_REQUEST':
      return dot(state).set(`store.removes`, [...state.store.removes, action]).value()
    case 'REMOVE_SUCCESS':
      return dot(state).set(`store.removes`, []).value()
    case 'REMOVE_FAILURE':
      return dot(state).set(`store.removes`, []).value()

    /* ------------------ */
    /* Delete             */
    /* ------------------ */
    case 'DELETE_REQUEST':
      return dot(state).set(`store.deletes`, [...state.store.deletes, action]).value()
    case 'DELETE_SUCCESS':
      if(!action.space) {
        return dot(state)
          .set(`store.deletes`, [])
          .set(`@.${state.address}.profile.${action.index}`, action.payload)
          .value()
      } else {
        return dot(state)
          .set(`store.deletes`, [])
          .set(`@.${state.address}.spaces.${action.space}.${action.index}`, action.payload)
          .value()
      }
    case 'DELETE_FAILURE':
      return dot(state).set(`store.deletes`, []).value()

    /* ------------------ */
    /* Thread             */
    /* ------------------ */
    case 'JOIN_THREAD_REQUEST':
      return dot(state).set(`store.threads`, [...state.store.threads, action]).value()
    case 'JOIN_THREAD_SUCCESS':
      return dot(state)
        .set(`@.${action.firstModerator}.threads.${action.space}.${action.threadName}`, action.posts)
        .set(`auth.threads.${action.threadName}`, action)
        .set(`store.threads`, [])
        .value()
    case 'JOIN_THREAD_FAILURE':
      return dot(state).set(`store.threads`, []).value()

    /* Thread Listen
    /* ------------------ */
    case 'THREAD_LISTEN_REQUEST':
      return dot(state).set(`store.listens`, [...state.store.threads, action]).value()
    case 'THREAD_LISTEN_SUCCESS':
      return dot(state)
        .set(`listening.${action.id}`, action)
        .set(`store.listens`, [])
        .value()
    case 'THREAD_LISTEN_FAILURE':
      return dot(state).set(`store.listens`, []).value()


    /* Thread Get
    /* ------------------ */
    case 'GET_THREAD_REQUEST':
      return dot(state).set(`store.threadsGet`, [...state.store.threadsGet, action]).value()
    case 'GET_THREAD_SUCCESS':
      return dot(state)
        .set(`@.${action.firstModerator}.threads.${action.space}.${action.threadName}`, action.payload)
        .set(`store.threadsGet`, [])
        .value()
    case 'GET_THREAD_FAILURE':
      return dot(state).set(`store.threadsGet`, []).value()

    /* Thread Get by Address
    /* ------------------ */
    case 'GET_THREAD_BY_ADDRESS_REQUEST':
      return dot(state).set(`store.threads`, [...state.store.threads, action]).value()
    case 'GET_THREAD_BY_ADDRESS_SUCCESS':
      return dot(state)
        .set(`@.${action.firstModerator}.threads.${action.threadAddress}`, action.payload) // Deprecated path
        .set(`store.threads`, [])
        .value()
    case 'GET_THREAD_BY_ADDRESS_FAILURE':
      return dot(state).set(`store.threads`, []).value()

    /* Thread Post Publish
    /* ------------------ */
    case 'THREAD_POST_PUBLISH_REQUEST':
      return dot(state).set(`store.posts`, [...state.store.posts, action]).value()
    case 'THREAD_POST_PUBLISH_SUCCESS':
      return dot(state)
        .set(`@.${action.firstModerator}.threads.${action.space}.${action.threadName}`, action.payload)
        .set(`auth.threads.${action.threadName}.posts`, action.payload)
        .set(`store.posts`, [])
        .value()

    /* Thread Post Delete
    /* ------------------ */
    case 'THREAD_POST_DELETE_REQUEST':
      return dot(state).set(`store.posts`, [...state.store.posts, action]).value()
    case 'THREAD_POST_DELETE_SUCCESS':
      return dot(state)
        .set(`@.${action.firstModerator}.threads.${action.space}.${action.threadName}`, action.payload)
        .set(`auth.threads.${action.threadName}.posts`, action.payload)
        .set(`store.posts`, [])
        .value()
    case 'THREAD_POST_DELETE_FAILURE':
      return dot(state).set(`store.posts`, []).value()
    default:

      throw new Error(`No Reducer Type Set ${action.type} `);
  }
}