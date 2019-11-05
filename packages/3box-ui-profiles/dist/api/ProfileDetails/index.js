"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _boxUiState = require("3box-ui-state");

var _uiCompose = require("@horizin/ui-compose");

/**
 * @function ProfileDetails
 * @description Display Profile Details
 * @version 1.0.0
 */

/* --- Global --- */
var ProfileDetails = function ProfileDetails(_ref) {
  var box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box"]);
  return _react["default"].createElement(A.Flex, (0, _extends2["default"])({
    column: true
  }, props.styled), (0, _idx["default"])(box, function (_) {
    return _.profile.id.name;
  }) && _react["default"].createElement(A.Flex, {
    alignCenter: true
  }, _react["default"].createElement(A.Heading, (0, _extends2["default"])({
    lg: true,
    heavy: true
  }, props.styledName.first), _uiCompose.validate.isStringRender(box.profile.id.name.first)), _react["default"].createElement(A.Heading, (0, _extends2["default"])({
    md: true,
    thin: true,
    ml: 2
  }, props.styledName.last), _uiCompose.validate.isStringRender(box.profile.id.name.middle), " ", _uiCompose.validate.isStringRender(box.profile.id.name.last))), (0, _idx["default"])(box, function (_) {
    return _.profile.id.occupation.job;
  }) && _react["default"].createElement(A.Span, (0, _extends2["default"])({
    fontSize: [2]
  }, props.styledJob), _react["default"].createElement(A.Span, props.styledJob, _uiCompose.validate.isStringRender(box.profile.id.occupation.job)), (0, _idx["default"])(box, function (_) {
    return _.profile.id.occupation.employer;
  }) && _react["default"].createElement(A.Span, props.styledEmployer, "at ", _uiCompose.validate.isStringRender(box.profile.id.occupation.employer))));
};

ProfileDetails.defaultProps = {
  styled: {},
  styledName: {
    first: {
      fontWeight: 700,
      fontSize: 3,
      mb: 0,
      noMargin: true
    },
    last: {
      fontWeight: 500,
      fontSize: 2,
      mb: 0
    }
  },
  styledJob: {
    fontWeight: 700,
    fontSize: 2,
    mt: 1
  },
  styledEmployer: {
    fontWeight: 300,
    fontSize: 2,
    ml: 2
  }
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfileDetails, props));
};

exports["default"] = _default;