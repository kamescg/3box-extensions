"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

var _BoxLoginButton = _interopRequireDefault(require("./BoxLoginButton"));

var _utilities = require("./utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxLoginCard = (_ref) => {
  var {
    box,
    isFooterActive,
    variant,
    children,
    styled,
    styledInner
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "isFooterActive", "variant", "children", "styled", "styledInner"]);

  var [profile, setProfile] = (0, _react.useState)();
  var [isImage, setIsImage] = (0, _react.useState)();
  var [isCover, setIsCover] = (0, _react.useState)();
  var [isName, setIsName] = (0, _react.useState)();
  var [isJob, setIsJob] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (box.profile) {
      setProfile(box.profile);
    }
  }, [box.profile]);
  (0, _react.useEffect)(() => {
    if (profile) {
      if (profile.image) setIsImage(true);
      if (profile.coverPhoto) setIsCover(true);
      if (profile.name) setIsName(true);
      if (profile.job) setIsJob(true);
    }
  }, [profile]);
  return !box.address ? _react.default.createElement(_BoxLoginButton.default, null) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystemAtoms.Box, _extends({
    boxShadow: 5,
    p: 0,
    width: "100%"
  }, styled, props), _react.default.createElement(_designSystemAtoms.Box, _extends({
    column: true,
    height: "100%",
    width: "100%"
  }, styledInner), _react.default.createElement(_designSystemAtoms.Flex, {
    flex: 1,
    p: 2,
    minHeight: 320,
    width: "100%"
  }, _react.default.createElement(_designSystemAtoms.Absolute, {
    layout: "topRight",
    zIndex: 100
  }, _react.default.createElement(_designSystemAtoms.Flex, {
    column: true,
    center: true
  }, _react.default.createElement(_designSystemAtoms.Absolute, {
    layout: "default",
    mt: 20
  }), _react.default.createElement(_designSystemAtoms.Absolute, {
    top: true,
    left: true,
    right: true,
    bottom: true
  }, _react.default.createElement(_designSystemAtoms.Image, {
    maxWidth: 28,
    circle: true,
    mx: 2,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  })))), _react.default.createElement(_designSystemAtoms.BackgroundGradient, {
    gradient: "purpink",
    gradientDir: "140 "
  }), isCover && _react.default.createElement(_designSystemAtoms.BackgroundImage, {
    src: (0, _utilities.GenerateImage)(profile.coverPhoto),
    opacity: 0.2
  })), _react.default.createElement(_designSystemAtoms.Box, {
    gradient: "gray",
    p: 4,
    minHeight: 300
  }, _react.default.createElement(_designSystemAtoms.Span, {
    mb: 3
  }, isImage ? _react.default.createElement(_designSystemAtoms.Box, {
    circle: true,
    p: 0,
    boxShadow: 4,
    maxWidth: 140,
    mt: -180
  }, _react.default.createElement(_designSystemAtoms.Image, {
    circle: true,
    p: 2,
    bg: "#ffffff8c",
    src: (0, _utilities.GenerateImage)(profile.image),
    boxShadow: 'sunset'
  })) : _react.default.createElement(_designSystemAtoms.Box, {
    circle: true,
    p: 0,
    boxShadow: 4,
    maxWidth: 140,
    mt: -180
  }, _react.default.createElement(_designSystemAtoms.Image, {
    card: true,
    circle: true,
    boxShadow: 'sunset',
    p: 20,
    src: "https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg"
  }))), _react.default.createElement(_designSystemAtoms.Absolute, {
    layout: "topRight",
    mt: -20,
    mx: 3
  }, _react.default.createElement(_designSystemAtoms.Button, {
    borderRadius: 30,
    variant: "white",
    p: 4
  }, "Follow")), props.biography && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystemAtoms.Heading, {
    sm: true,
    heavy: true
  }, "Biography"), _react.default.createElement(_designSystemAtoms.Box, {
    maxHeight: 160,
    pr: 3,
    overflow: "auto"
  }, _react.default.createElement(_designSystemAtoms.Paragraph, {
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

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxLoginCard, props));

exports.default = _default;