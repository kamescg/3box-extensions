"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Context = _interopRequireDefault(require("./Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducerActions(state, action) {
  switch (action.type) {
    case 'setTabSelected':
      return _objectSpread({}, state, {
        tabs: _objectSpread({}, state.tabs, {
          [action.tabGroup]: {
            selectedTabId: action.tabId
          }
        })
      });

    case 'registerTabsFamily':
      return _objectSpread({}, state, {
        tabs: _objectSpread({}, state.tabs, {
          [action.tabGroup]: {
            selectedTabId: undefined
          }
        })
      });
      break;

    case 'setTemplate':
      return _objectSpread({}, state, {
        variantDefault: action.default,
        templates: action.templates,
        inputs: action.inputs
      });

    case 'setTabsTemplate':
      return _objectSpread({}, state, {
        template: action.template,
        templates: action.templates,
        tabVariant: action.template
      });

    case 'setTabVariant':
      return _objectSpread({}, state, {
        tabVariant: action.variant
      });

    case 'setSelectedTabId':
      var {
        tabId
      } = action;
      return _objectSpread({}, state, {
        selectedTabId: tabId
      });

    default:
      throw new Error('No Reducer Type Set');
  }
}

var TabProvider = (_ref) => {
  var {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  var initialState = (0, _react.useContext)(_Context.default);
  var reducer = (0, _react.useReducer)(reducerActions, initialState); // Fix ReferenceError: exports is not defined

  var state = reducer[0];
  var dispatch = reducer[1];
  console.log(state, 'Tab State');
  (0, _react.useEffect)(() => {
    dispatch({
      type: 'setTabsTemplate',
      templates: props.templates
    });
  }, [props.tabsTemplate]);
  return _react.default.createElement(_Context.default.Provider, {
    value: _objectSpread({}, state, {
      dispatch: dispatch
    })
  }, children);
};

var _default = TabProvider;
exports.default = _default;