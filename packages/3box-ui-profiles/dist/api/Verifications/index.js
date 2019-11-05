"use strict";

var _interopRequireWildcard = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

/* --- Global Dependencies --- */
var BoxVerified = function BoxVerified(_ref) {
  var box = _ref.box,
      loadingMessage = _ref.loadingMessage,
      display = _ref.display,
      styled = _ref.styled,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box", "loadingMessage", "display", "styled"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isEmail = _useState2[0],
      setIsEmai = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isEmailVerified = _useState4[0],
      setIsEmailVerified = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isGithub = _useState6[0],
      setIsGithub = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      isTwitter = _useState8[0],
      setIsTwitter = _useState8[1];
  /**
   * @function VerificationsState
   * @description Manage the state of verifications
   */


  (0, _react.useEffect)(function () {
    if (box.verifications) {
      var verifications = Object.keys(box.verifications);
      setIsEmai(verifications.includes('email'));
      setIsGithub(verifications.includes('github'));
      setIsTwitter(verifications.includes('twitter'));
    }
  }, [box.verifications]);
  return !box.verifications ? null : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_designSystemAtoms.Flex, {
    between: true
  }, !isGithub ? _react["default"].createElement(_designSystemAtoms.Span, {
    xxs: true,
    thin: true,
    tag: "white"
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    maxWidth: 18,
    mr: 2
  }), _react["default"].createElement(_designSystemAtoms.Span, null, "Verify"))) : _react["default"].createElement(_designSystemAtoms.Span, {
    xxs: true,
    tag: "white"
  }, _react["default"].createElement("a", {
    href: "https://github.com/".concat(box.verifications.github.username)
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    maxWidth: 18,
    mr: 2
  }), _react["default"].createElement(_designSystemAtoms.Span, null, box.verifications.github.username)))), !isTwitter ? _react["default"].createElement(_designSystemAtoms.Span, {
    xxs: true,
    thin: true,
    tag: "white",
    mx: 2
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    src: "http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png",
    maxWidth: 18,
    mr: 2
  }), _react["default"].createElement(_designSystemAtoms.Span, null, "Verify"))) : _react["default"].createElement(_designSystemAtoms.Span, {
    xxs: true,
    tag: "white",
    color: "blue",
    mx: 3
  }, _react["default"].createElement("a", {
    href: "https://twitter.com/".concat(box.verifications.twitter.username)
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    src: "http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png",
    maxWidth: 18,
    mr: 2
  }), _react["default"].createElement(_designSystemAtoms.Span, null, box.verifications.twitter.username)))), !isEmail ? _react["default"].createElement(_designSystemAtoms.Span, {
    xxs: true,
    thin: true,
    tag: "white"
  }, _react["default"].createElement(_designSystemAtoms.Flex, {
    alignCenter: true
  }, _react["default"].createElement(_designSystemAtoms.Image, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0XdyBBhy5KQBP2sIrvFsWIBMwOxz064mxn-2SR6Tl_MlQ5e8",
    maxWidth: 18,
    mr: 2
  }), _react["default"].createElement(_designSystemAtoms.Span, null, "Unlock"))) : isEmailVerified ? _react["default"].createElement(_designSystemAtoms.Span, {
    xxs: true,
    tag: "white"
  }, "Email Verified") : _react["default"].createElement(_designSystemAtoms.Span, {
    xxs: true,
    tag: "white"
  }, "Verify Email")));
};

BoxVerified.defaultProps = {
  display: ['twitter', 'github']
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(BoxVerified, props));
};

exports["default"] = _default;