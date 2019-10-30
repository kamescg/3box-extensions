/* --- Global --- */
import React, { useContext, useReducer, useState } from "react";

/* --- Module --- */
import Context from "./Context";
import reducerActions from './reducer'

/* --- Effects --- */
import {
  useAutoEnableEffect,
  useAutoRequestProfileEffect,
  useAutoLoginEffect,
  useCloseBoxEffect,
  useDeleteEffect,
  useEnableEffect,
  useGetEffect,
  useGetProfileEffect,
  useGetSpaceEffect,
  useInsertEffect,
  useJoinThreadEffect,
  useOpenBoxEffect,
  useOpenSpaceEffect,
  useRemoveEffect,
  useSetAddressEffect,
  useSetEffect,
  useSetProfileEffect,
  useThreadListenEffect,
  useThreadPostEffect
} from './effects'

/* --- Provider Component --- */
const Provider = ({ children, ...props }) => {
  const initialState = useContext(Context)
  const [state, dispatch] = useReducer(reducerActions, initialState);

  // console.log(state, 'Box Provider')

  useAutoEnableEffect(state, dispatch)
  useAutoLoginEffect(state, dispatch)
  useAutoRequestProfileEffect(state, dispatch)
  useCloseBoxEffect(state, dispatch)
  useDeleteEffect(state, dispatch)
  useGetEffect(state, dispatch)
  useGetProfileEffect(state, dispatch)
  useGetSpaceEffect(state, dispatch)
  useEnableEffect(state, dispatch)
  useInsertEffect(state, dispatch)
  useJoinThreadEffect(state, dispatch)
  useOpenBoxEffect(state, dispatch)
  useOpenSpaceEffect(state, dispatch)
  useRemoveEffect(state, dispatch)
  useSetAddressEffect(state, dispatch)
  useSetEffect(state, dispatch)
  useSetProfileEffect(state, dispatch)
  useThreadListenEffect(state, dispatch)
  useThreadPostEffect(state, dispatch)

  return (
    <Context.Provider value={{
      ...state,
      dispatch: dispatch,
      setConfig: (config) => ({ ...state.config, ...config }),
      selector: (select) => state[select],
      enable: () => dispatch({ type: 'ENABLE_REQUEST' }),
      login: () => dispatch({ type: 'OPEN_REQUEST' }),
      logout: () => dispatch({ type: 'LOGOUT_REQUEST' }),
      /* -------------------------------- */
      /* Static
      /* -------------------------------- */

      /* --- Profiles (https://docs.3box.io/api/profiles#get) --- */
      getProfile: (address) => dispatch({
        type: 'GET_PROFILE_REQUEST',
        address
      }),
      getProfileList: (addresses) => dispatch({
        type: 'GET_PROFILE_LIST_REQUEST',
        address
      }),

      /* --- Spaces (https://docs.3box.io/api/storage#get) --- */
      getSpace: ({ address, space }) => dispatch({
        type: 'GET_SPACE_REQUEST',
        address: address.toLowerCase(),
        space,
      }),
      listSpaces: ({ address, space }) => dispatch({
        type: 'GET_SPACES_REQUEST',
        address,
        space,
      }),

      /* --- Threads (https://docs.3box.io/api/messaging#static-1) --- */
      getThread: ({ space, threadName, firstModerator, members, options }) => dispatch({
        type: 'GET_THREAD_REQUEST',
        space,
        threadName,
        firstModerator,
        members,
        options,
      }),
      getThreadByAddress: ({ threadAddress }) => dispatch({
        type: 'GET_THREAD_BY_ADDRESS_REQUEST',
        threadAddress
      }),
      listenThread: ({ threadAddress, threadName, }) => dispatch({
        type: 'THREAD_LISTEN_REQUEST',
        threadAddress,
        threadName,
      }),

      /* -------------------------------- */
      /* Stateful
      /* -------------------------------- */
      /* --- Authentication (https://docs.3box.io/api/auth) --- */
      openSpace: (space) => dispatch({
        type: 'OPEN_SPACE_REQUEST',
        space
      }),

      /* --- Storage (https://docs.3box.io/api/storage) --- */
      // Default 3Box CRUD
      get: ({ key, access, space }) => dispatch({
        type: 'GET_REQUEST',
        access,
        key,
        space
      }),
      set: ({ keys, key, insert, inputs, access, space, append, update }) => dispatch({
        type: 'SET_REQUEST',
        append: insert || append,
        keys,
        key,
        inputs,
        access,
        space,
        update
      }),

      /**
       * setMerge and setInsert are the same.
       * deprecate setInsert.
       */
      setMerge: ({ access, space, key, delta, value }) => dispatch({
        type: 'SET_MERGE_REQUEST',
        key,
        space,
        delta,
        value,
        access,
      }),
      setSingle: ({ access, key, value, space }) => dispatch({
        type: 'SET_SINGLE_REQUEST',
        access,
        key,
        value,
        space,
      }),
      setMultiple: ({ space, access, keys, inputs }) => dispatch({
        type: 'SET_MULTIPLE_REQUEST',
        space,
        access,
        keys,
        inputs
      }),
      remove: ({ space, access, key }) => dispatch({
        type: 'REMOVE_REQUEST',
        access,
        key,
        space,
      }),

      // Enhanced 3Box CRUD
      /**
       * @function insert
       * @description Insert value into object.
       */
      insert: ({ space, access, index, key, value }) => dispatch({
        type: 'INSERT_REQUEST',
        address: state.address,
        space,
        access,
        index,
        key,
        value,
      }),

      /**
       * @function delete
       * @description Delete value from object.
       */
      delete: ({ space, access, index, key }) => dispatch({
        type: 'DELETE_REQUEST',
        address: state.address,
        space,
        access,
        index,
        key,
      }),

      /**
       * @function push
       * @description Push value to array
       * @todo ADD THIS FEATURE EVERYWHERE
       */
      push: ({ space, access, index, value }) => dispatch({
        type: 'PUSH_REQUEST',
        address: state.address,
        space,
        access,
        index,
        value,
      }),

      /**
       * @function filter
       * @description Filter array.
       * @todo ADD THIS FEATURE EVERYWHERE
       */
      filter: ({ space, access, index, filter }) => dispatch({
        type: 'FILTER_REQUEST',
        address: state.address,
        space,
        access,
        index,
        filter,
      }),

      /* --- Messageing (https://docs.3box.io/api/messaging) --- */
      joinThread: ({ space, threadName, threadAddress, options }) => dispatch({
        type: 'JOIN_THREAD_REQUEST',
        space,
        threadName,
        threadAddress,
        options
      }),
      threadPost: ({ space, threadName, post }) => dispatch({
        type: 'THREAD_POST_PUBLISH_REQUEST',
        space,
        threadName,
        post,
      }),
      threadPostDelete: ({ space, threadName, postId }) => dispatch({
        type: 'THREAD_POST_DELETE_REQUEST',
        space,
        threadName,
        postId,
      }),
    }}>
      {children}
    </Context.Provider>
  );
}
export default Provider;