"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _boxUiState = require("3box-ui-state");

var _utilities = require("../utilities");

var _Component = _interopRequireDefault(require("./Component"));

var _boxDao = require("@kames/3box-dao");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxSelector = (_ref) => {
  var {
    box,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "children"]);

  var [data, setData] = (0, _react.useState)();
  var [address, setAddress] = (0, _react.useState)(props.address);
  var [space, setSpace] = (0, _react.useState)(props.space);
  var [selection, setSelection] = (0, _react.useState)();
  var [dispatched, setDispatched] = (0, _react.useState)();
  var [missing, setMissing] = (0, _react.useState)();
  /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */

  var LoadGlobalConfigurationEffect = () => (0, _react.useEffect)(() => {
    if (!space && box.config.cms.space) {
      setSpace(box.config.cms.space);
    }

    if (!address && box.config.cms.address) {
      setAddress(box.config.cms.address);
    }
  }, [space, address]);
  /**
  * @function GetSpaceEffect
  * @description IF proper conditions are met request space.
  */


  var GetSpaceEffect = () => (0, _react.useEffect)(() => {
    if ((0, _utilities.isAddress)(address) && space && !dispatched) {
      box.getSpace({
        address,
        space
      });
      setDispatched(true);
    }
  }, [address, space, dispatched]);
  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */


  var SetSelectionEffect = () => (0, _react.useEffect)(() => {
    if (box && props.message && props.message.data) {
      var list, item;

      switch (props.message.meta.parent_type) {
        case 'array':
          list = (0, _dotPropImmutableChain.default)(box).get("data.spaces.".concat(props.space, ".").concat(props.access, ".").concat(props.index)).value();

          if (list && list.length > 0) {
            item = list.filter(i => i.alias === props.message.data);
            if (item[0]) setData(item[0]);else setMissing(true);
          }

          break;

        case 'object':
          item = (0, _dotPropImmutableChain.default)(box).get("data.spaces.".concat(props.meta.space, ".").concat(props.meta.access, ".").concat(props.meta.index)).value();
          if (item) setSelection(item);else setMissing(true);
          break;

        default:
          break;
      }
    }
  }, [(0, _dotPropImmutableChain.default)(box).get("data.spaces.".concat(props.space)).value()]);
  /* --- Init Effects ---*/


  if (props.isGlobalConfig) LoadGlobalConfigurationEffect();
  if (props.canRequestData) GetSpaceEffect();
  if (props.isRefresh) SetSelectionEffect();
  return !data ? null : _react.default.createElement(_Component.default, {
    data: data,
    component: props.component,
    pass: props.pass
  });
};

BoxSelector.defaultProps = {
  canRequestData: true,
  isGlobalConfig: true,
  isRefresh: true
};
BoxSelector.propTypes = {
  address: _propTypes.default.string,
  canRequestData: _propTypes.default.bool,
  component: _propTypes.default.func.isRequired,
  isGlobalConfig: _propTypes.default.bool,
  isRefresh: _propTypes.default.bool,
  selector: _propTypes.default.string,
  space: _propTypes.default.string
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxSelector, props));

exports.default = _default;