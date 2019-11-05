"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileIdentity = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _boxUiSystemRender = require("3box-ui-system-render");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ProfileIdentity = function ProfileIdentity(props) {
  return _react["default"].createElement(_boxUiSystemRender.StorageRender, {
    access: "public",
    selector: "id",
    component: ProfileIdentityView
  });
};

exports.ProfileIdentity = ProfileIdentity;

var ProfileIdentityView = function ProfileIdentityView(_ref) {
  var first = _ref.first,
      middle = _ref.middle,
      last = _ref.last,
      sx = _ref.sx,
      sxFirst = _ref.sxFirst,
      sxMiddle = _ref.sxMiddle,
      sxLast = _ref.sxLast,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["first", "middle", "last", "sx", "sxFirst", "sxMiddle", "sxLast"]);
  return _react["default"].createElement(Atom.Heading, (0, _extends2["default"])({
    sx: {
      sx: sx
    }
  }, props), _react["default"].createElement(Atom.Span, {
    className: "first",
    sx: _objectSpread({}, sxFirst)
  }, first), _react["default"].createElement(Atom.Span, {
    className: "middle",
    sx: _objectSpread({
      mx: 1
    }, sxMiddle)
  }, middle), _react["default"].createElement(Atom.Span, {
    className: "last",
    sx: _objectSpread({}, sxLast)
  }, last));
};

ProfileIdentityView.defaultProps = {};