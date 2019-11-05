"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _boxUiState = require("3box-ui-state");

var _effects = require("./effects");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MessagePost = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var messagePostStatus = (0, _effects.useThreadPostStatusEffect)(box, props);
  var login = (0, _effects.useOpenRequestEffect)(box);
  var space = (0, _effects.useSpaceReadyEffect)(box, props);
  var thread = (0, _effects.useThreadReadyEffect)(bsox, props);
  /**
   * @name triggerOnMessagePostCallbackEffect
   * @description Trigger callback function on message post is complete.
   */

  (0, _react.useEffect)(() => {
    if (messagePostStatus.complete) {
      if (props.onMessagePost) props.onMessagePost(messagePostStatus.complete);
    }
  }, [messagePostStatus.complete]);
  /**
   * @name threadPostEffect
   * @description Dispatch a thread/message post request.
   */

  (0, _react.useEffect)(() => {
    if (props.threadName && props.post) {
      box.threadPost({
        space: props.space,
        threadName: props.threadName,
        post: props.post
      });
    }
  }, [props.post]);
  return null;
};

MessagePost.defaultProps = {
  access: 'public'
};
MessagePost.propTypes = {};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(MessagePost, props));

exports.default = _default;