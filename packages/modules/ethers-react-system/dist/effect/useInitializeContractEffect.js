"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ethers = require("ethers");

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useInitializeContractEffect = (state, dispatch) => {
  var [isInitialized, setInitialize] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.wallet && state.store.contracts && state.store.contracts.length > 0) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* () {
          var contract;
          var request = state.store.contracts[0];
          var {
            payload
          } = request;

          try {
            var wallet = state.wallet;
            contract = new _ethers.ethers.Contract(payload.address, payload.abi, wallet);
            dispatch({
              type: 'INIT_CONTRACT_SUCCESS',
              delta: request.id,
              payload: contract,
              contractType: payload.contractType
            });
            setInitialize(true);
          } catch (error) {
            dispatch({
              type: 'INIT_CONTRACT_FAILURE',
              delta: request.id,
              payload: error
            });
            setInitialize(false);
          }
        });

        return function runEffect() {
          return _ref.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.wallet, state.store.contracts]);
  return isInitialized;
};
/* --- Export --- */


var _default = useInitializeContractEffect;
exports.default = _default;