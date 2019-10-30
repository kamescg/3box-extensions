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
var useDeployContractEffect = (state, dispatch) => {
  var [isRequested, setRequested] = (0, _react.useState)();
  var [isResponse, setResponse] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.wallet && state.store.deploy && state.store.deploy.length > 0) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* () {
          var request = state.store.deploy[0];
          var contract, deployed, transaction;
          var {
            payload
          } = request;

          try {
            contract = new _ethers.ethers.ContractFactory(payload.contract.abi, payload.contract.bytecode, wallet);
            transaction = contract.getDeployTransaction(...payload.values);
            deployed = yield wallet.sendTransaction(transaction);
            dispatch({
              type: 'DEPLOY_CONTRACT_SUCCESS',
              id: request.id,
              delta: request.id,
              payload: deployed
            });
          } catch (error) {
            dispatch({
              type: 'DEPLOY_CONTRACT_FAILURE',
              delta: request.id,
              payload: error
            });
          }
        });

        return function runEffect() {
          return _ref.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.store.deploy]);
  return {
    requested: isRequested,
    response: isResponse
  };
};
/* --- Export --- */


var _default = useDeployContractEffect;
exports.default = _default;