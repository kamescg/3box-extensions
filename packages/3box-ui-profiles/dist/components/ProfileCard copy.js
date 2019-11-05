"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCard = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _ProfileImage = require("./ProfileImage");

var _ProfileIdentity = require("./ProfileIdentity");

var _ProfileDetailsOccupation = require("./ProfileDetailsOccupation");

/**
 * @function ProfileCard
 * @description Profile Card
 */

/* --- Global --- */
var ProfileCardView = function ProfileCardView(_ref) {
  var box = _ref.box,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "children"]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Atom.Flex, {
    center: true,
    column: true,
    card: true,
    sx: {
      textAlign: 'center'
    }
  }, _react["default"].createElement(_ProfileImage.ProfileImage, {
    variant: "avatar",
    sx: {
      width: 80,
      height: 80,
      my: 2
    }
  }), _react["default"].createElement(_ProfileIdentity.ProfileIdentity, null), _react["default"].createElement(_ProfileDetailsOccupation.ProfileDetailsOccupation, {
    sx: {
      fontSize: 1,
      fontWeight: 300
    }
  }), box.isEnableSuccess && _react["default"].createElement(Atom.Span, {
    tag: true,
    sm: true
  }, "View Full Profile")));
};

var ProfileCard = function ProfileCard(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfileCardView, props));
};

exports.ProfileCard = ProfileCard;