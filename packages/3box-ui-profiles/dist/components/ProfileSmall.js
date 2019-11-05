"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileSmall = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _boxUiState = require("3box-ui-state");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _utilities = require("./utilities");

/* --- Global Dependencies --- */
var ProfileSmallView = function ProfileSmallView(_ref) {
  var box = _ref.box,
      address = _ref.address,
      small = _ref.small,
      styled = _ref.styled,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "address", "small", "styled"]);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      profile = _useState2[0],
      setProfile = _useState2[1];

  (0, _react.useEffect)(function () {
    if (address && !profile) {
      box.getProfile(address);
    } else if ((0, _idx["default"])(box, function (_) {
      return _.profiles[address];
    })) {// setProfile(idx(box, _=>_.profiles[address]))
    }
  }, [address, profile]);
  (0, _react.useEffect)(function () {
    if (!profile) {
      setProfile((0, _idx["default"])(box, function (_) {
        return _.profiles[address];
      }));
    }
  }, [profile, (0, _idx["default"])(box, function (_) {
    return _.profiles[address];
  })]);
  return _react["default"].createElement(ProfileCard, (0, _extends2["default"])({
    small: small,
    profile: profile,
    address: address
  }, props));
};

var ProfileCard = function ProfileCard(_ref2) {
  var profile = _ref2.profile,
      small = _ref2.small,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["profile", "small"]);

  var _useState3 = (0, _react.useState)(props.disableName),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isNameDisabled = _useState4[0],
      setIsNameDisabled = _useState4[1];

  return profile ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Flex, (0, _defineProperty2["default"])({
    circle: true,
    center: true,
    column: true,
    boxShadow: 0,
    p: 2,
    border: "1px solid #FFF",
    overflow: "hidden",
    m: 1,
    width: 24,
    height: 24,
    maxWidth: 26
  }, "maxWidth", 26), profile.image ? _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    ratio: .5,
    src: (0, _utilities.GenerateImage)(profile.image)
  }) : _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    ratio: .5,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  })), !isNameDisabled && _react["default"].createElement(_designSystemAtoms.Box, {
    ml: 10
  }, _react["default"].createElement(_designSystemAtoms.Link, {
    to: "/profile/".concat(props.address)
  }, _react["default"].createElement(_designSystemAtoms.Heading, {
    md: true,
    noMargin: true
  }, (0, _idx["default"])(profile, function (_) {
    return _.name;
  })))))) : _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Span, null, _react["default"].createElement(_designSystemAtoms.Image, {
    card: true,
    circle: true,
    src: "https://static.thenounproject.com/png/2348501-200.png",
    border: "none",
    bg: "white",
    p: 0,
    width: 20
  })), _react["default"].createElement(_designSystemAtoms.Box, {
    ml: 10
  }, _react["default"].createElement(_designSystemAtoms.Box, {
    borderRadius: 40,
    bg: "gray",
    p: 1,
    width: 120
  })));
};

var ProfileSmall = function ProfileSmall(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfileSmallView, props));
};

exports.ProfileSmall = ProfileSmall;