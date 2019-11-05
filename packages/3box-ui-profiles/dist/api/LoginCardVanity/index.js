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
  return !box.address ? _react["default"].createElement(BoxLoginButton, null) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_designSystemAtoms.Box, (0, _extends2["default"])({
    boxShadow: 5,
    p: 0,
    width: "100%"
  }, styled, props), _react["default"].createElement(_designSystemAtoms.Box, (0, _extends2["default"])({
    column: true,
    height: "100%",
    width: "100%"
  }, styledInner), _react["default"].createElement(_designSystemAtoms.Flex, {
    flex: 1,
    p: 2,
    minHeight: 320,
    width: "100%"
  }, _react["default"].createElement(_designSystemAtoms.Absolute, {
    layout: "topRight",
    zIndex: 100
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    column: true,
    center: true
  }, _react["default"].createElement(_designSystemAtoms.Absolute, {
    layout: "default",
    mt: 20
  }), _react["default"].createElement(_designSystemAtoms.Absolute, {
    top: true,
    left: true,
    right: true,
    bottom: true
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    maxWidth: 28,
    circle: true,
    mx: 2,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  })))), _react["default"].createElement(_designSystemAtoms.BackgroundGradient, {
    gradient: "purpink",
    gradientDir: "140 "
  }), isCover && _react["default"].createElement(_designSystemAtoms.BackgroundImage, {
    src: (0, _utilities.GenerateImage)(profile.coverPhoto),
    opacity: 0.2
  })), _react["default"].createElement(_designSystemAtoms.Box, {
    gradient: "gray",
    p: 4,
    minHeight: 300
  }, _react["default"].createElement(_designSystemAtoms.Span, {
    mb: 3
  }, isImage ? _react["default"].createElement(_designSystemAtoms.Box, {
    circle: true,
    p: 0,
    boxShadow: 4,
    maxWidth: 140,
    mt: -180
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    circle: true,
    p: 2,
    bg: "#ffffff8c",
    src: (0, _utilities.GenerateImage)(profile.image),
    boxShadow: 'sunset'
  })) : _react["default"].createElement(_designSystemAtoms.Box, {
    circle: true,
    p: 0,
    boxShadow: 4,
    maxWidth: 140,
    mt: -180
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    card: true,
    circle: true,
    boxShadow: 'sunset',
    p: 20,
    src: "https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg"
  }))), _react["default"].createElement(_designSystemAtoms.Absolute, {
    layout: "topRight",
    mt: -20,
    mx: 3
  }, _react["default"].createElement(_designSystemAtoms.Button, {
    borderRadius: 30,
    variant: "white",
    p: 4
  }, "Follow")), props.biography && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_designSystemAtoms.Heading, {
    sm: true,
    heavy: true
  }, "Biography"), _react["default"].createElement(_designSystemAtoms.Box, {
    maxHeight: 160,
    pr: 3,
    overflow: "auto"
  }, _react["default"].createElement(_designSystemAtoms.Paragraph, {
    sm: true
  }, profile && profile.biography)))))));
};

BoxLoginCard.defaultProps = {
  biography: 'Dignissim quisque sed. Congue elit duis. Pretium sapien odio per leo risus. Aenean dolor luctus vestibulum ac urna volutpat ullamcorper et. Integer laoreet tempor.',
  isFooterActive: true,
  profile: {
    biography: 'Dignissim quisque sed. Congue elit duis. Pretium sapien odio per leo risus. Aenean dolor luctus vestibulum ac urna volutpat ullamcorper et. Integer laoreet tempor. Massa euismod integer.'
  }
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(BoxLoginCard, props));
};

exports["default"] = _default;