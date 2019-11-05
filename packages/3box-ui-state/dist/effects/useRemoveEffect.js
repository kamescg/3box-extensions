"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useRemoveEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.store && state.store.removes) {
      var selected = state.store.removes[0];

      if (selected) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* () {
            var {
              space,
              access,
              index
            } = selected;

            try {
              var read;

              if (selected.space) {
                read = yield state.auth.spaces[selected.space].instance[selected.access].remove(selected.key);
              } else {
                read = yield state.instance[selected.access].remove(selected.key);
              }

              console.log(selected, read, 'remove effect');
              dispatch({
                type: 'REMOVE_SUCCESS',
                space,
                access,
                index,
                payload: read
              });
              setDispatched(true); // Trigger 

              dispatch({
                type: "GET_REQUEST",
                access,
                key: selected.key,
                space
              });
            } catch (error) {
              dispatch({
                type: 'REMOVE_FAILURE',
                payload: error
              });
              setDispatched(false);
            }
          });

          return function runEffect() {
            return _ref.apply(this, arguments);
          };
        }();

        runEffect();
      }
    }
  }, [state.store.removes]);
  return dispatched;
};
/* --- Export --- */


var _default = useRemoveEffect;
exports.default = _default;