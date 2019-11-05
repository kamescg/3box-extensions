"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenerateImagefromHash = exports.GenerateImage = void 0;

var _idx = _interopRequireDefault(require("idx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenerateImage = image => {
  var IPFSFile = hash => "https://ipfs.io/ipfs/".concat(hash);

  var imageipfs = (0, _idx.default)(image, _ => _[0].contentUrl['/']) ? IPFSFile((0, _idx.default)(image, _ => _[0].contentUrl['/'])) : null;
  return imageipfs;
};

exports.GenerateImage = GenerateImage;

var GenerateImagefromHash = image => "https://ipfs.io/ipfs/".concat(image);

exports.GenerateImagefromHash = GenerateImagefromHash;