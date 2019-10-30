"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/kamescg/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/kamescg/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _extends3 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/kamescg/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _react = _interopRequireDefault(require("react"));

var _utilities = require("../utilities");

/* --- Global --- */
var _default = function _default(props) {
  return _react["default"].createElement(DID.Context, null, function (box) {
    return _react["default"].createElement(A.Flex, (0, _extends3["default"])((0, _defineProperty2["default"])({
      circle: true,
      center: true,
      column: true,
      boxShadow: 0,
      p: 2,
      border: "2px solid #FFF",
      overflow: "hidden",
      width: 36,
      height: 36,
      maxWidth: 48
    }, "maxWidth", 48), props), box.profile && box.profile.image ? _react["default"].createElement(A.BackgroundImage, {
      ratio: .5,
      circle: true,
      src: (0, _utilities.GenerateImage)(box.profile.image)
    }) : _react["default"].createElement(A.BackgroundImage, {
      ratio: .5,
      circle: true,
      src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
    }));
  });
};

exports["default"] = _default;