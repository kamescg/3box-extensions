"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

var _designSystemOrganisms = require("@horizin/design-system-organisms");

var _LoginButton = _interopRequireDefault(require("../LoginButton"));

var _utilities = require("../utilities");

/* --- Global Dependencies --- */
var BoxLoginCard = function BoxLoginCard(_ref) {
  var box = _ref.box,
      isFooterActive = _ref.isFooterActive,
      variant = _ref.variant,
      children = _ref.children,
      styled = _ref.styled,
      styledInner = _ref.styledInner,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "isFooterActive", "variant", "children", "styled", "styledInner"]);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      profile = _useState2[0],
      setProfile = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isImage = _useState4[0],
      setIsImage = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isCover = _useState6[0],
      setIsCover = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      isName = _useState8[0],
      setIsName = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      isJob = _useState10[0],
      setIsJob = _useState10[1];

  (0, _react.useEffect)(function () {
    if (box.profile) {
      setProfile(box.profile);
    }
  }, [box.profile]);
  (0, _react.useEffect)(function () {
    if (profile) {
      if (profile.image) setIsImage(true);
      if (profile.coverPhoto) setIsCover(true);
      if (profile.name) setIsName(true);
      if (profile.job) setIsJob(true);
    }
  }, [profile]);
  return !box.address ? _react["default"].createElement(_LoginButton["default"], null) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_designSystemAtoms.Box, (0, _extends2["default"])({
    p: 0
  }, styled, props), _react["default"].createElement(_designSystemAtoms.Box, (0, _extends2["default"])({
    x: true,
    column: true,
    height: "100%"
  }, styledInner), _react["default"].createElement(_designSystemAtoms.Flex, {
    flex: 1,
    p: 2,
    minHeight: isCover ? 150 : 50
  }, _react["default"].createElement(_designSystemAtoms.BackgroundGradient, {
    gradient: "purpink",
    gradientDir: "140 "
  }), isCover && _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    src: (0, _utilities.GenerateImage)(profile.coverPhoto),
    opacity: 0.2
  })), _react["default"].createElement(_designSystemAtoms.Flex, {
    column: true,
    card: true,
    borderNone: true,
    flex: 1,
    textAlign: "center",
    p: 15,
    py: 30,
    zIndex: 20
  }, _react["default"].createElement(_designSystemAtoms.Box, {
    maxWidth: 320,
    alignSelf: "center"
  }, isImage ? _react["default"].createElement(_designSystemAtoms.Image, {
    circle: true,
    card: true,
    src: (0, _utilities.GenerateImage)(profile.image),
    boxShadow: 'sunset',
    p: 20,
    maxWidth: 140,
    mt: -180
  }) : _react["default"].createElement(_designSystemAtoms.Image, {
    card: true,
    circle: true,
    boxShadow: 'sunset',
    p: 20,
    maxWidth: 80,
    mt: -80,
    src: "https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg"
  }), _react["default"].createElement(_designSystemAtoms.Box, {
    mb: 10,
    mt: isImage ? -30 : -2
  }), isName && _react["default"].createElement(_designSystemAtoms.Heading, {
    heavy: true,
    md: true,
    mt: -20,
    fontWeight: 300,
    children: profile.name
  }), isJob && _react["default"].createElement(_designSystemAtoms.Span, {
    textCenter: true,
    mb: 3,
    fontSize: [2]
  }, profile.job, " ", profile.employer && _react["default"].createElement(_designSystemAtoms.Span, null, "at ", profile.employer)), _react["default"].createElement(_designSystemAtoms.Box, null, _react["default"].createElement(_LoginButton["default"], {
    mb: 20
  })))), isFooterActive && _react["default"].createElement(_designSystemAtoms.Flex, {
    center: true,
    card: true,
    flex: 1,
    p: 10
  }, _react["default"].createElement(_designSystemAtoms.BackgroundGradient, {
    gradient: "gray"
  }), _react["default"].createElement(_designSystemAtoms.Flex, {
    between: true,
    width: 320,
    maxWidth: 320,
    fullWidth: true
  }, _react["default"].createElement(_designSystemAtoms.Span, null, _react["default"].createElement(_designSystemAtoms.Button, {
    xs: true
  }, box.addressShortened)), _react["default"].createElement(_designSystemOrganisms.Toast, {
    label: "Profile Edit",
    content: _react["default"].createElement(ProfileEdit, null)
  }, _react["default"].createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "white"
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    card: true,
    circle: true,
    p: 1,
    maxWidth: 24,
    src: "https://cdn.iconscout.com/icon/free/png-512/account-185-461747.png"
  }), _react["default"].createElement(_designSystemAtoms.Span, {
    pointer: true,
    mx: 2
  }, "Edit Profile")))))))));
};

BoxLoginCard.defaultProps = {
  isFooterActive: true,
  profile: {}
};

var ProfileEdit = function ProfileEdit(_ref2) {
  var styled = _ref2.styled,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["styled"]);
  return _react["default"].createElement(_designSystemAtoms.Box, {
    bg: "white",
    p: 20,
    minWidth: 270
  });
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(BoxLoginCard, props));
};

exports["default"] = _default;