"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useOpenSpaceEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.instance && state.store && state.store.open) {
      var selected = state.store.open[0];

      if (selected) {
        try {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref = _asyncToGenerator(function* () {
              var threads;
              var space = yield state.instance.openSpace(selected.space);

              if (space.all) {
                threads = yield space.subscribedThreads();
              }

              dispatch({
                type: "OPEN_SPACE_SUCCESS",
                instance: space,
                space: selected.space,
                threads
              });
              setDispatched(true);
            });

            return function runEffect() {
              return _ref.apply(this, arguments);
            };
          }();

          runEffect();
        } catch (error) {
          dispatch({
            type: "OPEN_SPACE_FAILURE",
            payload: error,
            space: selected.space
          });
          setDispatched(false);
        }
      }
    }
  }, [state.instance.openSpace, state.store.open]);
  return dispatched;
};
/* --- Export --- */


var _default = useOpenSpaceEffect;
exports.default = _default;