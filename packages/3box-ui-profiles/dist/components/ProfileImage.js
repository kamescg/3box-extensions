"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileImage = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _utilities = require("../utilities");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ProfileImage = function ProfileImage(_ref) {
  var sx = _ref.sx,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["sx"]);
  return _react["default"].createElement(DID.Context, null, function (box) {
    return _react["default"].createElement(A.Flex, (0, _extends2["default"])({
      circle: true,
      center: true,
      column: true,
      sx: _objectSpread({
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 9999,
        boxShadow: 0,
        display: 'inline-flex',
        height: 48,
        width: 48,
        overflow: 'hidden'
      }, sx)
    }, props), box['@'][box.address] && box['@'][box.address].profile && box['@'][box.address].profile.image ? _react["default"].createElement(A.BackgroundImage, {
      ratio: .5,
      circle: true,
      src: (0, _utilities.GenerateImage)(box['@'][box.address].profile.image)
    }) : _react["default"].createElement(A.BackgroundImage, {
      ratio: .5,
      circle: true,
      src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
    }));
  });
};

exports.ProfileImage = ProfileImage;