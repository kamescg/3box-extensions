"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

/**
 * @function useSetProfileEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useSetProfileEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.address) {
      state.static.getProfile(state.address).then(profile => {
        dispatch({
          type: "SET_PROFILE",
          profile
        });
        setDispatched(true);
      });
    }
  }, [state.address]);
  return dispatched;
};
/* --- Export --- */


var _default = useSetProfileEffect;
exports.default = _default;