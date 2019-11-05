"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function useStorageRetrieveEffect
 * @description Retrieve data from an Ethereum profile. 
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useStorageRetrieveEffect = (state, props) => {
  var [data, setData] = (0, _react.useState)();
  var [address, setAddress] = (0, _react.useState)(props.address || state.address);
  console.log(data, props.selector, 'stttooorage');
  (0, _react.useEffect)(() => {
    setAddress(state.address);
  }, [state.address]);
  (0, _react.useEffect)(() => {
    if (state['@'][address]) {
      var _data;

      if (!props.space) {
        _data = _dotPropImmutableChain.default.get(state, "@.".concat(address, ".profile.").concat(props.selector));
        setData(_data);
      } else {
        _data = _dotPropImmutableChain.default.get(state, "@.".concat(address, ".spaces.").concat(props.space, ".").concat(props.access, ".").concat(props.selector));
        setData(_data);
      }
    }
  }, [state['@'][address], props]);
  return {
    data
  };
};
/* --- Export --- */


var _default = useStorageRetrieveEffect;
exports.default = _default;