"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxThreadPostDelete = (_ref) => {
  var {
    threadName,
    postId,
    box,
    variant,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["threadName", "postId", "box", "variant", "children"]);

  var clickHandler =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(function* (_ref2) {
      var {
        threadName,
        postId
      } = _ref2;
      box.threadPostDelete({
        threadName,
        postId
      });
    });

    return function clickHandler(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return box.instance ? children ? _react.default.createElement(_designSystemAtoms.Span, {
    onClick: () => clickHandler({
      threadName,
      postId
    })
  }, children) : _react.default.createElement(_designSystemAtoms.Button, {
    xs: true,
    variant: "red",
    onClick: () => clickHandler({
      threadName,
      postId
    })
  }, "Delete Post") : null;
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxThreadPostDelete, props));

exports.default = _default;