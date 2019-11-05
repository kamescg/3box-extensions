"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCover = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _utilities = require("../utilities");

/* --- Global --- */
var ProfileCover = function ProfileCover(_ref) {
  var sx = _ref.sx,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["sx"]);
  return _react["default"].createElement(DID.Context, null, function (box) {
    return box['@'][box.address] && box['@'][box.address].profile && box['@'][box.address].profile.coverPhoto ? _react["default"].createElement(A.BackgroundImage, (0, _extends2["default"])({
      src: (0, _utilities.GenerateImage)(box['@'][box.address].profile.coverPhoto),
      sx: sx
    }, props)) : null;
  });
};

exports.ProfileCover = ProfileCover;