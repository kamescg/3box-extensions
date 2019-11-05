import React, { useContext, useReducer, useEffect } from "react";
import Context from "./Context";

function reducerActions(state, action) {
  switch (action.type) {
    case 'setTabSelected':
      return {
        ...state,
        tabs: {
          ...state.tabs,
          [action.tabGroup]: {
            selectedTabId: action.tabId
          }
        }
      }

    case 'registerTabsFamily':
      return {
        ...state,
        tabs: {
          ...state.tabs,
          [action.tabGroup]: {
            selectedTabId: undefined
          }
        }
      }
      break;
    case 'setTemplate':
      return {
        ...state,
        variantDefault: action.default,
        templates: action.templates,
        inputs: action.inputs,
      }
    case 'setTabsTemplate':
      return {
        ...state,
        template: action.template,
        templates: action.templates,
        tabVariant: action.template
      }
    case 'setTabVariant':
      return {
        ...state,
        tabVariant: action.variant
      }
    case 'setSelectedTabId':
      const { tabId } = action
      return {
        ...state,
        selectedTabId: tabId
      };
    default:
      throw new Error('No Reducer Type Set');
  }
}

const TabProvider = ({ children, ...props }) => {
  const initialState = useContext(Context)
  const reducer = useReducer(reducerActions, initialState);

  // Fix ReferenceError: exports is not defined
  const state = reducer[0]
  const dispatch = reducer[1]
  console.log(state, 'Tab State')
  useEffect(() => {
    dispatch({
      type: 'setTabsTemplate',
      templates: props.templates,
    })
  }, [props.tabsTemplate])

  return (
    <Context.Provider value={{
      ...state,
      dispatch: dispatch,
    }}>
      {children}
    </Context.Provider>
  );
}

export default TabProvider;