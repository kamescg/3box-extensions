"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _boxUiState = require("3box-ui-state");

var _Component = _interopRequireDefault(require("../helpers/Component"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var MessagingSelector = (_ref) => {
  var {
    box,
    selector
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "selector"]);

  /* --- Iternal State --- */
  var [selection, setSelection] = (0, _react.useState)();
  var [dispatched, setDispatched] = (0, _react.useState)();
  /* --- Passed State --- */

  var [space, setSpace] = (0, _react.useState)(props.space);
  var [firstModerator, setfirstModerator] = (0, _react.useState)(props.firstModerator);
  var [threadName] = (0, _react.useState)(props.threadName);
  var [threadAddress] = (0, _react.useState)(props.threadAddress);
  var [members] = (0, _react.useState)(props.members);
  var [options] = (0, _react.useState)(props.options);
  /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */

  var LoadGlobalConfigurationEffect = () => (0, _react.useEffect)(() => {
    if (!space && box.config.cms.space) {
      setSpace(box.config.cms.space);
    } // if(!firstModerator && box.config.cms.address) {
    //   setfirstModerator(box.config.cms.address)
    // }

  }, [space, firstModerator]);
  /**
   * @function GetThreadEffect
   * @description IF proper conditions are met request space.
   */


  var GetThreadEffect = () => (0, _react.useEffect)(() => {
    if (!selection && space && threadName && firstModerator && !dispatched) {
      if (threadAddress) {
        box.getThreadByAddress({
          threadAddress
        });
      } else box.getThread({
        space,
        threadName,
        firstModerator,
        members: members || false,
        options // opts.profileServer

      });

      setDispatched(true);
    }
  }, [space, threadName, dispatched]);
  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */


  var SetSelectionEffect = () => (0, _react.useEffect)(() => {
    var val = (0, _dotPropImmutableChain.default)(box).get("@.".concat(props.firstModerator, ".threads.").concat(space, ".").concat(threadName)).value();
    setSelection(val);
  }, [(0, _dotPropImmutableChain.default)(box).get("@.".concat(props.firstModerator, ".threads.").concat(space, ".").concat(threadName)).value()]);
  /* --- Init Effects ---*/


  if (props.isGlobalConfig) LoadGlobalConfigurationEffect();
  if (props.canRequestData) GetThreadEffect();
  if (props.isRefresh) SetSelectionEffect(); // if(!props.isRefresh) SetSelectionOnceEffect()

  /* --- Return Component ---*/

  return _react.default.createElement(_Component.default, {
    data: selection,
    styled: {
      m: 2
    },
    pass: _objectSpread({}, props.pass, {
      styled: props.styled,
      threadAddress,
      threadName,
      space
    }),
    component: props.component
  });
};

MessagingSelector.defaultProps = {
  canRequestData: true,
  component: () => null,
  isGlobalConfig: true,
  isRefresh: true,
  members: true
};
MessagingSelector.propTypes = {
  canRequestData: _propTypes.default.bool,
  component: _propTypes.default.func.isRequired,
  firstModerator: _propTypes.default.string,
  isGlobalConfig: _propTypes.default.bool,
  isRefresh: _propTypes.default.bool,
  members: _propTypes.default.bool,
  selector: _propTypes.default.string,
  space: _propTypes.default.string,
  threadAddress: _propTypes.default.string,
  threadName: _propTypes.default.string
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(MessagingSelector, props));

exports.default = _default;