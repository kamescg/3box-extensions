import React, { useContext, useReducer, useEffect } from "react";
import Context from "./Context";
import reducerActions from "./reducer";
import ProviderEffects from './effects'
const Provider = ({ children, ...props }) => {
  const initialState = useContext(Context)
  const [state, dispatch] = useReducer(reducerActions, initialState);
  ProviderEffects(useEffect, state, dispatch)
  return (
    <Context.Provider value={{
      ...state,
      dispatch: dispatch,
      closeModals: () => dispatch({
        type: 'CLOSE_PORTAL',
        instance: 'modals'
      }),
      closePanels: () => dispatch({
        type: 'CLOSE_PORTAL',
        instance: 'panels'
      }),
      closeToast: ({ id }) => dispatch({
        type: 'CLOSE_PORTAL',
        instance: 'toasts',
        id
      }),
      openModal: ({ content, label, styled, styledInner, styledLabel, variant, variantInner, closeCallback }) => dispatch({
        type: 'OPEN_PORTAL',
        instance: 'modals',
        content,
        label,
        variant,
        variantInner,
        styled,
        styledInner,
        styledLabel,
        closeCallback
      }),
      openPanel: ({ content, label, styled, styledInner, styledLabel }) => dispatch({
        type: 'OPEN_PORTAL',
        instance: 'panels',
        content,
        label,
        styled,
        styledInner,
        styledLabel
      }),
      openToast: ({ content, label, styled, styledLabel, closeTimer, closeOnClick }) => dispatch({
        type: 'OPEN_PORTAL',
        instance: 'toasts',
        content,
        closeOnClick,
        closeTimer,
        label,
        styled,
        styledLabel
      })
    }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;