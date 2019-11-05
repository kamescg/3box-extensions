"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

var _BoxLoginButton = _interopRequireDefault(require("./BoxLoginButton"));

var _utilities = require("../utilities");

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
    p: 0
  }, styled, props), _react.default.createElement(_designSystemAtoms.Box, _extends({
    x: true,
    column: true,
    height: "100%"
  }, styledInner), _react.default.createElement(_designSystemAtoms.Flex, {
    flex: 1,
    p: 2,
    minHeight: isCover ? 150 : 50
  }, _react.default.createElement(_designSystemAtoms.BackgroundGradient, {
    gradient: "purpink",
    gradientDir: "140 "
  }), isCover && _react.default.createElement(_designSystemAtoms.BackgroundImage, {
    src: (0, _utilities.GenerateImage)(profile.coverPhoto),
    opacity: 0.2
  })), _react.default.createElement(_designSystemAtoms.Flex, {
    column: true,
    card: true,
    borderNone: true,
    flex: 1,
    textAlign: "center",
    p: 15,
    py: 30,
    zIndex: 20
  }, _react.default.createElement(_designSystemAtoms.Box, {
    maxWidth: 320,
    alignSelf: "center"
  }, isImage ? _react.default.createElement(_designSystemAtoms.Image, {
    circle: true,
    card: true,
    src: (0, _utilities.GenerateImage)(profile.image),
    boxShadow: 'sunset',
    p: 20,
    maxWidth: 140,
    mt: -180
  }) : _react.default.createElement(_designSystemAtoms.Image, {
    card: true,
    circle: true,
    boxShadow: 'sunset',
    p: 20,
    maxWidth: 80,
    mt: -80,
    src: "https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg"
  }), _react.default.createElement(_designSystemAtoms.Box, {
    mb: 10,
    mt: isImage ? -30 : -2
  }), isName && _react.default.createElement(_designSystemAtoms.Heading, {
    heavy: true,
    md: true,
    mt: -20,
    fontWeight: 300,
    children: profile.name
  }), isJob && _react.default.createElement(_designSystemAtoms.Span, {
    textCenter: true,
    mb: 3,
    fontSize: [2]
  }, profile.job, " ", profile.employer && _react.default.createElement(_designSystemAtoms.Span, null, "at ", profile.employer)), _react.default.createElement(_designSystemAtoms.Box, null, _react.default.createElement(_BoxLoginButton.default, {
    mb: 20
  })))), isFooterActive && _react.default.createElement(_designSystemAtoms.Flex, {
    center: true,
    card: true,
    flex: 1,
    p: 10
  }, _react.default.createElement(_designSystemAtoms.BackgroundGradient, {
    gradient: "gray"
  }), _react.default.createElement(_designSystemAtoms.Flex, {
    between: true,
    width: 320,
    maxWidth: 320,
    fullWidth: true
  }, _react.default.createElement(_designSystemAtoms.Span, null, _react.default.createElement(_designSystemAtoms.Button, {
    xs: true
  }, box.addressShortened)))))));
};

BoxLoginCard.defaultProps = {
  isFooterActive: true,
  profile: {}
};

var ProfileEdit = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(_designSystemAtoms.Box, {
    bg: "white",
    p: 20,
    minWidth: 270
  });
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxLoginCard, props));

exports.default = _default;