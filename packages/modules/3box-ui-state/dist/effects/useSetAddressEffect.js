"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _utilities = require("./utilities");

/**
 * @function useSetAddressEffect
 * @description Set the global ETH address with shorthand properties
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Local --- */
var useSetAddressEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    var address = state.address;

    if ((0, _utilities.isAddress)(address)) {
      dispatch({
        type: "SET_ADDRESS",
        address,
        addressShortened: (0, _utilities.shortenAddress)(address, 6),
        addressTrimmed: address.substring(0, 10)
      });
    }
  }, [state.address]);
  return dispatched;
};
/* --- Export --- */


var _default = useSetAddressEffect;
exports.default = _default;