"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxOpenSpace = (_ref) => {
  var {
    box,
    styled,
    styledLoading,
    componentLoading,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled", "styledLoading", "componentLoading", "children"]);

  var [dispatchRequest, setDispatchRequest] = (0, _react.useState)();
  var [message, setMessage] = (0, _react.useState)();
  var [loading, setLoading] = (0, _react.useState)(false);
  var [isSpaceReady, setIsSpaceReady] = (0, _react.useState)(false);
  var [isThreadReady, setIsThreadReady] = (0, _react.useState)(false);
  /**
   * @function isSpaceReadyEffect
   * @description Check if 3Box Space is ready.
   */

  (0, _react.useEffect)(() => {
    if (!isSpaceReady) {
      console.log('getting space');
      var select = (0, _dotPropImmutableChain.default)(box).get("auth.spaces.".concat(props.space, ".instance")).value();

      if (select) {
        setIsSpaceReady(true);
        setMessage('space ready');
      }
    }
  }, [box.aut]);
  /**
   * @function isThreadReadyEffect
   * @description Check if 3Box Space is ready.
   */

  (0, _react.useEffect)(() => {
    if (!isThreadReady) {
      var select = (0, _dotPropImmutableChain.default)(box).get("auth.threads.".concat(props.threadName, ".instance")).value();

      if (select) {
        setMessage('space and thread ready');
        setIsThreadReady(true);
      }
    }
  }, [box.auth]);
  /**
   * @function isJoinRequestedEffect
   * @description Manage component dispatch requests.
   */

  (0, _react.useEffect)(() => {
    if (!isThreadReady && isSpaceReady && (dispatchRequest || props.auto)) {
      box.joinThread({
        threadAddress: props.threadAddress,
        threadName: props.threadName,
        space: props.space,
        options: props.options
      });
    }
  }, [box.auth.spaces[props.space], // Trigger Effect (Auth space changes often)
  dispatchRequest, // Manual Request 
  isSpaceReady // Requirements Met
  ]);
  /**
   * @function ComponentActionHandler
   * @description Handle component click event. 
   */

  var actionHandler = () => {
    setDispatchRequest(true);
    setLoading(true);
  };

  return !props.auto ? loading ? componentLoading ? componentLoading : _react.default.createElement(_designSystemAtoms.Box, {
    fullWidth: true
  }, message, _react.default.createElement(_designSystemAtoms.Button, styledLoading, "Loading Thread...")) : children ? _react.default.createElement(_designSystemAtoms.Span, {
    onClick: actionHandler
  }, children) : _react.default.createElement(_designSystemAtoms.Box, {
    fullWidth: true,
    onClick: actionHandler
  }, _react.default.createElement(_designSystemAtoms.Button, styled, "join ", _react.default.createElement("strong", null, props.threadName), " thread")) : null;
};

BoxOpenSpace.defaultProps = {
  threadName: undefined,
  labelLoading: 'Loading Thread...',
  styled: {
    fontWeight: 'normal',
    width: '100%'
  },
  styledLoading: {
    width: '100%'
  }
};
BoxOpenSpace.propTypes = {
  space: _propTypes.default.string.isRequired
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxOpenSpace, props));

exports.default = _default;