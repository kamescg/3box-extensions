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
  (0, _react.useEffect)(() => {
    if (state['@'][props.address]) {
      var _data = _dotPropImmutableChain.default.get(state, "@.".concat(props.address, ".profile.").concat(props.selector));

      setData(_data);
    }
  }, [state['@'][props.address], props]);
  return {
    data
  };
};
/* --- Export --- */


var _default = useStorageRetrieveEffect;
exports.default = _default;