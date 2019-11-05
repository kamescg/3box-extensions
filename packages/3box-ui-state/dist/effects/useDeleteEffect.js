"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useDeleteEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.store && state.store.deletes) {
      var selected = state.store.deletes[0];

      if (selected) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* () {
            var {
              space,
              access,
              index,
              key
            } = selected;

            try {
              var read, write;

              if (space) {
                read = state['@'][state.address].spaces[space][access][index];
                delete read[key];
                write = yield state.spaces[space].instance[access].set(index, read);
              } else {
                read = state.auth.profile[index];
                delete read[key];
                write = yield state.auth.instance[access].set(index, read);
              }

              dispatch({
                type: 'DELETE_SUCCESS',
                id: key,
                space,
                payload: read
              });
              setDispatched(true);
            } catch (error) {
              console.log(error);
              dispatch({
                type: 'DELETE_FAILURE',
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
    }
  }, [state.store.deletes]);
  return dispatched;
};
/* --- Export --- */


var _default = useDeleteEffect;
exports.default = _default;