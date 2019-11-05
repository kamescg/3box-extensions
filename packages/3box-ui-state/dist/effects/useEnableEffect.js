"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _utilities = require("./../utilities");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var useEnableEffect = (state, dispatch) => {
  var [enabled, setEnabled] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.isEnableRequested) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* () {
          try {
            var accounts = yield window.ethereum.enable();
            var address = accounts[0];

            if (address) {
              dispatch({
                type: "ENABLE_SUCCESS"
              });
              dispatch({
                type: "SET_ADDRESS",
                address,
                addressShortened: (0, _utilities.shortenAddress)(address, 6),
                addressTrimmed: address.substring(0, 10)
              });
              setEnabled(true);
            }
          } catch (error) {
            dispatch({
              type: "ENABLE_FAILURE"
            });
            setEnabled(false);
          }
        });

        return function runEffect() {
          return _ref.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.isEnableRequested]);
  return enabled;
};
/* --- Export --- */


var _default = useEnableEffect;
exports.default = _default;