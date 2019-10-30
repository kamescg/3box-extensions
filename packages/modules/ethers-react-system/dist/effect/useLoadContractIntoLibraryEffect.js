"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

/**
 * @function useLoadContractIntoLibraryEffect
 * @description Load smart contract abi into applicaiton library to initialize for multiple addresses.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */

/* --- Component --- */
var useLoadContractIntoLibraryEffect = (state, dispatch) => {
  var [isLoadedIntoLibrary, setLoadedIntoLibrary] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.store.library && state.store.library.length > 0) {
      var request = state.store.library[0];
      dispatch({
        type: 'LOAD_CONTRACT_INTO_LIBRARY_SUCCESS',
        id: request.id,
        payload: request.payload
      });
      setLoadedIntoLibrary(true);
    }
  }, [state.wallet, state.store.contracts]);
  return isLoadedIntoLibrary;
};
/* --- Export --- */


var _default = useLoadContractIntoLibraryEffect;
exports.default = _default;