"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

/**
 * @function useSetAddressFromSelectedEffect
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useSetAddressFromSelected = (state, dispatch) => {
  var [isAddressSelected, setAddressSelected] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      dispatch({
        type: 'SET_ADDRESS',
        input: window.ethereum.selectedAddress
      });
      setAddressSelected(true);
    }
  }, [window.ethereum && window.ethereum.selectedAddress]);
  return isAddressSelected;
};
/* --- Export --- */


var _default = useSetAddressFromSelected;
exports.default = _default;