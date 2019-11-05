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

var StorageSetMerge = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var [delta, setDelta] = (0, _react.useState)();
  var [value, setValue] = (0, _react.useState)();
  var storageSet = (0, _effects.useStorageSetStatusEffect)(box, props);
  /**
   * @name assignMergeTypeEffect
   * @description Dispatch a setMerge request.
   * If
   *  1. No unique delta identifier is passed.
   *  2. Delta creation IS NOT requested.
   * Effect
   *  1. Wrap incoming value as array.
   *  2. Required for dot.merge method to infer type.
   */

  (0, _react.useEffect)(() => {
    if (!props.delta && !props.deltaCreate) {
      setValue([props.value]);
    } else if (!props.delta && props.deltaCreate) {
      setDelta(Date.now());
      setValue(props.value);
    } else {
      setDelta(props.delta);
      setValue(props.value);
    }
  }, [props.value]);
  /**
   * @name triggerOnSetCallbackEffect
   * @description Pass storage set status to parent via callback.
   * @todo Change onSet to onStorageSetMerge? More explicit?
   */

  (0, _react.useEffect)(() => {
    if (storageSet.complete) {
      if (props.onStorageSuccess) props.onStorageSuccess(storageSet.complete);
    }
  }, [storageSet.complete]);
  /**
   * @name setMergeEffect
   * @description Dispatch a setMerge request.
   */

  (0, _react.useEffect)(() => {
    if (props.index && value) {
      box.setMerge({
        access: props.access,
        key: props.index,
        // Top level key to set.
        delta: delta,
        value: value,
        // Data to set
        space: props.space // If space is passed set data in space.

      });
    }
  }, [value]);
  return null;
};

StorageSetMerge.defaultProps = {
  access: 'public'
};
StorageSetMerge.propTypes = {};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(StorageSetMerge, props));

exports.default = _default;