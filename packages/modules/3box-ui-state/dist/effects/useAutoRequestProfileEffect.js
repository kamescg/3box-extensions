"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

/**
 * @function useAutoRequestProfileEffect
 * @description Auto enable the wallet by sending disaptch to the enable effect. 
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useAutoRequestProfileEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (!dispatched && state.address && state.isRequestProfileAuto) {
      'getting profile';
      dispatch({
        type: 'GET_PROFILE_REQUEST',
        address: state.address
      });
      setDispatched(true);
    }
  }, [state.address, state.isRequestProfileAuto]);
  return dispatched;
};
/* --- Export --- */


var _default = useAutoRequestProfileEffect;
exports.default = _default;