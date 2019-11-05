"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name FooterDefault
 * @description Card Footer Default Render 
 */

/* eslint-disable react-hooks/exhaustive-deps */
var FooterDefault = props => {
  return _react.default.createElement(_designSystemAtoms.BackgroundImage, {
    ratio: .2,
    opacity: .3,
    src: props.imageCover
  });
};

var _default = FooterDefault;
exports.default = _default;