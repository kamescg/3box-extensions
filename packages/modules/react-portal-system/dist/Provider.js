"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Context = _interopRequireDefault(require("./Context"));

var _reducer = _interopRequireDefault(require("./reducer"));

var _effects = _interopRequireDefault(require("./effects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var [state, dispatch] = (0, _react.useReducer)(_reducer.default, initialState);
  (0, _effects.default)(_react.useEffect, state, dispatch);
  return _react.default.createElement(_Context.default.Provider, {
    value: _objectSpread({}, state, {
      dispatch: dispatch,
      closeModals: () => dispatch({
        type: 'CLOSE_PORTAL',
        instance: 'modals'
      }),
      closePanels: () => dispatch({
        type: 'CLOSE_PORTAL',
        instance: 'panels'
      }),
      closeToast: (_ref2) => {
        var {
          id
        } = _ref2;
        return dispatch({
          type: 'CLOSE_PORTAL',
          instance: 'toasts',
          id
        });
      },
      openModal: (_ref3) => {
        var {
          content,
          label,
          styled,
          styledInner,
          styledLabel,
          variant,
          variantInner,
          closeCallback
        } = _ref3;
        return dispatch({
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
        });
      },
      openPanel: (_ref4) => {
        var {
          content,
          label,
          styled,
          styledInner,
          styledLabel
        } = _ref4;
        return dispatch({
          type: 'OPEN_PORTAL',
          instance: 'panels',
          content,
          label,
          styled,
          styledInner,
          styledLabel
        });
      },
      openToast: (_ref5) => {
        var {
          content,
          label,
          styled,
          styledLabel,
          closeTimer,
          closeOnClick
        } = _ref5;
        return dispatch({
          type: 'OPEN_PORTAL',
          instance: 'toasts',
          content,
          closeOnClick,
          closeTimer,
          label,
          styled,
          styledLabel
        });
      }
    })
  }, children);
};

var _default = Provider;
exports.default = _default;