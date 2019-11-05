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

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _boxUiState = require("3box-ui-state");

var _uiCompose = require("@horizin/ui-compose");

var _boxUiProfilesStateless = require("3box-ui-profiles-stateless");

var _effects = require("../effects");

/**
 * @function ProfileLineItem
 * @description Display Profile Details in Line Item
 * @version 1.0.0
 */

/* --- Global --- */
var ProfileLineItem = function ProfileLineItem(_ref) {
  var box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box"]);

  /* --- Component State --- */
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isFooterActive = _useState2[0],
      setFooterActive = _useState2[1];
  /* --- Profile State --- */


  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      profile = _useState4[0],
      setProfile = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isAvatar = _useState6[0],
      setAvatar = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      isCover = _useState8[0],
      setCover = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      isName = _useState10[0],
      setName = _useState10[1];

  var _useState11 = (0, _react.useState)(),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      isJob = _useState12[0],
      setJob = _useState12[1];

  var request = (0, _effects.useProfileRetrieveEffect)(box, props);
  (0, _react.useEffect)(function () {
    if (request.isReady) setProfile(request.profile);
    if (request.profile.image) setAvatar(true);
    if (request.profile.coverPhoto) setCover(true);
    if (request.profile.id && request.profile.id.name) setName(true);
    if (request.profile.id && request.profile.id.occupation) setJob(true);
  }, [request.isReady]);
  return !profile ? null : _react["default"].createElement(A.Flex, (0, _extends2["default"])({
    alignCenter: true,
    between: true
  }, props.styled), _react["default"].createElement(A.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_boxUiProfilesStateless.ProfileAvatar, {
    image: profile.image,
    styled: props.styledAvatar,
    dimensions: 32,
    borderRadius: 9999
  }), (0, _idx["default"])(profile, function (_) {
    return _.id.name;
  }) && _react["default"].createElement(A.Flex, {
    alignCenter: true
  }, _react["default"].createElement(A.Heading, props.styledName.first, _uiCompose.validate.isStringRender(profile.id.name.first)), props.displayNameLast && _react["default"].createElement(A.Heading, (0, _extends2["default"])({
    md: true,
    thin: true,
    ml: 2
  }, props.styledName.last), _uiCompose.validate.isStringRender(profile.id.name.middle), " ", _uiCompose.validate.isStringRender(profile.id.name.last)))), _react["default"].createElement(A.Box, null, _react["default"].createElement(A.Link, {
    to: "/profile/".concat(profile.address)
  }, _react["default"].createElement(A.Span, {
    xxs: true,
    tag: "blue"
  }, "Profile"))));
};

ProfileLineItem.defaultProps = {
  displayNameLast: false,
  displayEmployer: false,
  styled: {
    card: true,
    my: 1,
    flex: 1
  },
  styledCover: {
    opacity: .3
  },
  styledMain: {
    p: 3
  },
  styledFooter: {
    gradient: 'gray',
    p: 2
  },
  styledName: {
    first: {
      fontWeight: 500,
      fontSize: 3,
      mb: 0,
      ml: 3
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
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfileLineItem, props));
};

exports["default"] = _default;