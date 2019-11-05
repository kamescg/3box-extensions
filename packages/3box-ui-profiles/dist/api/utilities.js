"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenerateImage = void 0;

var _idx = _interopRequireDefault(require("idx"));

var GenerateImage = function GenerateImage(image) {
  var IPFSFile = function IPFSFile(hash) {
    return "https://ipfs.io/ipfs/".concat(hash);
  };

  var imageipfs = (0, _idx["default"])(image, function (_) {
    return _[0].contentUrl['/'];
  }) ? IPFSFile((0, _idx["default"])(image, function (_) {
    return _[0].contentUrl['/'];
  })) : null;
  return imageipfs;
};

exports.GenerateImage = GenerateImage;