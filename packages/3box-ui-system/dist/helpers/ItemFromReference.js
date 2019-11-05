"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _boxUiState = require("3box-ui-state");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var BoxSelector = (_ref) => {
  var {
    box,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "children"]);

  var [isMissing, setMissing] = (0, _react.useState)(false);
  var [selection, setSelection] = (0, _react.useState)();
  var selector = "data.spaces.".concat(props.space, ".").concat(props.access, ".").concat(props.index);
  (0, _react.useEffect)(() => {
    if (box && props.message && props.message.data) {
      var list, item;

      switch (props.message.meta.parent_type) {
        case 'array':
          list = (0, _dotPropImmutableChain.default)(box).get(selector).value();

          if (list.length > 0) {
            item = list.filter(i => i.alias === props.message.data);
            if (item[0]) setSelection(item[0]);else setMissing(true);
          }

          break;

        case 'object':
          selector = (_readOnlyError("selector"), "data.spaces.".concat(props.meta.space, ".").concat(props.meta.access, ".").concat(props.meta.index));
          item = (0, _dotPropImmutableChain.default)(box).get(selector).value();
          if (item) setSelection(item);else setMissing(true);
          break;

        default:
          break;
      }
    }
  }, [(0, _dotPropImmutableChain.default)(box).get(selector).value()]);
  return selection ? _react.default.createElement(props.component, _objectSpread({}, selection, {
    space: props.space,
    access: props.access,
    index: props.index
  })) : null;
};

BoxSelector.defaultProps = {
  component: () => null
};
BoxSelector.propTypes = {
  component: _propTypes.default.func
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxSelector, props));

exports.default = _default;