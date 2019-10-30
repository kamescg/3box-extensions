"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _ethersState = require("@kames/ethers-state");

var _dist = require("@kames/3box-system/dist");

var _utils = require("./utils");

var _TransferEventItem = _interopRequireDefault(require("./TransferEventItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* ========== Component ========== */

/**
 * @function ERC20TotalSupply
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
var ERC20TotalSupply = (_ref) => {
  var {
    ethers,
    styled
  } = _ref,
    props = _objectWithoutProperties(_ref, ["ethers", "styled"]);

  var [list, setEventList] = (0, _react.useState)();
  /**
   * @function effectHandlerWithContract
   * @description Read from initialized contract.
   * @todo Remove async in effect. Handle in data store.
   */

  var effectHandlerWithContract =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(function* () {
        try {
          if (ethers.contracts[props.address]) {
            var events;
            events = yield ethers.contracts[props.address].filters.Transfer(null, null); // Read Public Function
            // Filter Config

            var filter = {
              address: props.address,
              fromBlock: 0,
              toBlock: "latest",
              topics: events.topics
            };
            var logs = yield ethers.provider[props.network].getLogs(filter);
            var data = logs.map(event => (0, _utils.decodeLogs)(event, ethers.contracts[props.address].interface.events.Transfer));
            setEventList(data);
          } else {
            return null;
          }
        } catch (error) {
          console.log(error); // What errors are we catching?
        }
      });

      return function effectHandlerWithContract() {
        return _ref2.apply(this, arguments);
      };
    }();
  /**
   * @function statusEffect
   * @description Display component state to user.
   * @return {undefined}
   */


  (0, _react.useEffect)(() => {
    if (ethers.contracts[props.address]) {
      effectHandlerWithContract();
    }
  }, [ethers.contracts[props.address]]);
  /* --- Init Effects --- */
  // statusEffect()

  /* --- Component --- */

  return _react.default.createElement(_dist.Component, {
    selection: list,
    component: _TransferEventItem.default,
    pass: {
      styled: {
        card: true,
        my: 3
      }
    }
  });
};

ERC20TotalSupply.defaultProps = {
  label: 'Total Supply',
  network: 'rinkeby',
  styled: {
    as: 'h5',
    fontSize: 2
  },
  styledLabel: {
    fontWeight: 700
  }
};
ERC20TotalSupply.propTypes = {
  address: _propTypes.default.string.isRequired,
  styled: _propTypes.default.object,
  styledLabel: _propTypes.default.object,
  network: _propTypes.default.string,
  label: _propTypes.default.string
};

var _default = props => _react.default.createElement(_ethersState.EthersInject, null, _react.default.createElement(ERC20TotalSupply, props));

exports.default = _default;