"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

/**
 * @function useAutoEnable
 * @description Auto enable the wallet by sending disaptch to the enable effect. 
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useAutoEnable = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (!dispatched && state.isEnableAuto) {
      dispatch({
        type: 'ENABLE_REQUEST'
      });
      setDispatched(true);
    }
  }, [state.isEnableAuto]);
  return dispatched;
};
/* --- Export --- */


var _default = useAutoEnable;
exports.default = _default;