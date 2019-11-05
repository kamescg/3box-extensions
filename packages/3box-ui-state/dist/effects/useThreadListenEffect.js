"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useThreadListenEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.store && state.store.listens) {
      var selected = state.store.listens[0];

      if (selected) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* () {
            try {
              var threadId = selected.threadName || selected.threadAddress || undefined;
              if (!threadId) throw new Error('Thread Listen: Thread ID (name or address) is unset');
              dispatch({
                type: 'THREAD_LISTEN_SUCCESS',
                id: threadId,
                payload: callback
              });
            } catch (error) {
              console.log(error);
              dispatch({
                type: 'THREAD_LISTEN_FAILURE',
                threadAddress: selected.threadName,
                threadName: selected.threadName
              });
            }
          });

          return function runEffect() {
            return _ref.apply(this, arguments);
          };
        }();

        runEffect();
      }
    }
  }, [state.store.listens]);
  return dispatched;
};
/* --- Export --- */


var _default = useThreadListenEffect;
exports.default = _default;