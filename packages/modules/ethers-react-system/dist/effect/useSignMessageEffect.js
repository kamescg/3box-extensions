"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useSignMessageEffect = (state, dispatch) => {
  var [isRequested, setRequested] = (0, _react.useState)();
  var [isResponse, setResponse] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.provider && state.wallet && state.store.messages && state.store.messages.length > 0) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* () {
          var messageRequest = state.store.messages[0];

          try {
            var signature;

            switch (messageRequest.type) {
              // Signed Typed Data
              case 'SIGN_TYPED_MESSAGE_REQUEST':
                signature = yield state.provider.injected.send('eth_signTypedData', [messageRequest.payload, state.address]);
                setRequested(true);
                break;
              // Normal Signed Data

              default:
                signature = yield state.wallet.signMessage(messageRequest.payload);
                break;
            }

            if (signature) {
              dispatch({
                type: 'SIGN_MESSAGE_SUCCESS',
                id: messageRequest.id,
                payload: signature
              });
              setResponse(true);
            }
          } catch (error) {
            dispatch({
              type: 'SIGN_MESSAGE_FAILURE',
              id: messageRequest.id,
              payload: error
            });
            setResponse(false);
          }
        });

        return function runEffect() {
          return _ref.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.store.messages, state.provider, state.wallet]);
  return {
    requested: isRequested,
    response: isResponse
  };
};
/* --- Export --- */


var _default = useSignMessageEffect;
exports.default = _default;