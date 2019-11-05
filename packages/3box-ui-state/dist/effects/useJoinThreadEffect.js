"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useJoinThreadEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.store && state.store.threads) {
      var selected = state.store.threads[0];

      if (selected && state.spaces && state.auth.spaces[selected.space] && state.auth.spaces[selected.space].instance) {
        try {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref = _asyncToGenerator(function* () {
              var thread, members, moderators;

              if (selected.threadAddress) {
                thread = yield state.spaces[selected.space].instance.joinThreadByAddress(selected.threadAddress, selected.options);
              } else {
                selected.options = _objectSpread({}, selected.options, {
                  firstModerator: state.address // Inject address into first moderator. Don't want to deal with DID resolution right now. 

                });
                thread = yield state.spaces[selected.space].instance.joinThread(selected.threadName, selected.options);
              }

              var posts = yield thread.getPosts();

              if (thread._members) {
                members = yield thread.listMembers();
                moderators = yield thread.listModerators();
              }

              dispatch({
                type: "JOIN_THREAD_SUCCESS",
                instance: thread,
                threadName: selected.threadName,
                firstModerator: state.address,
                posts,
                members,
                moderators,
                space: selected.space
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
            type: "JOIN_THREAD_FAILURE",
            space: selected.space,
            threadName: selected.threadName,
            firstModerator: state.address
          });
        }
      }
    }
  }, [state.store, state.store.threads]);
  return dispatched;
};
/* --- Export --- */


var _default = useJoinThreadEffect;
exports.default = _default;