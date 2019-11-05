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

var StorageSet = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var storageSet = (0, _effects.useStorageSetStatusEffect)(box, props);
  /**
   * @name triggerOnSetCallbackEffect
   * @description Pass storage set status to parent via callback.
   * @todo Change onSet to onStorageSet? More explicit?
   */

  (0, _react.useEffect)(() => {
    if (storageSet.complete) {
      if (props.onSet) props.onSet(storageSet.complete);
    }
  }, [storageSet.complete]);
  /**
   * @name setSingleEffect
   * @description Dispatch a set request. https://docs.3box.io/api/storage#set
   */

  (0, _react.useEffect)(() => {
    if (props.index && props.value) {
      box.setSingle({
        access: props.access,
        key: props.index,
        // Top level key to set.
        value: props.value,
        // Data to set
        space: props.space // If space is passed set data in space.

      });
    }
  }, [props.value]);
  return null;
};

StorageSet.defaultProps = {
  access: 'public'
};
StorageSet.propTypes = {};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(StorageSet, props));

exports.default = _default;