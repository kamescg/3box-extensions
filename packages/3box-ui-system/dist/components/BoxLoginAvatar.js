"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

var _utilities = require("../utilities");

var _BoxLoginIcons = _interopRequireDefault(require("./BoxLoginIcons"));

var _ProfileImage = _interopRequireDefault(require("./ProfileImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var BoxLoginAvatar = (_ref) => {
  var {
    box,
    variant,
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "variant", "children", "styled"]);

  return _react.default.createElement(A.Flex, _extends({
    center: true,
    column: true
  }, props), _react.default.createElement(_designSystemAtoms.Absolute, {
    top: 0
  }, _react.default.createElement(_designSystemAtoms.Loading, {
    type: "ripple"
  })), !box.isLoggedIn ? _react.default.createElement(_react.default.Fragment, null, box.address ? _react.default.createElement(_ProfileImage.default, {
    onClick: box.open,
    opacity: .75,
    opacity: box.isLoggingIn ? .75 : .5
  }) : _react.default.createElement(_ProfileImage.default, {
    opacity: 1,
    pointer: true,
    onClick: box.enable
  }), box.address ? box.isLoggingIn ? _react.default.createElement(_designSystemAtoms.Absolute, null, _react.default.createElement(_designSystemAtoms.Loading, {
    type: "ripple"
  })) : _react.default.createElement(_designSystemAtoms.Absolute, {
    bottom: 0,
    mb: "-10px",
    left: true,
    right: true
  }, _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "white",
    onClick: box.open
  }, "login")) : _react.default.createElement(_designSystemAtoms.Absolute, {
    bottom: 0,
    mb: "-15px",
    left: true,
    right: true
  }, _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "green",
    onClick: box.enable
  }, "enable"))) : _react.default.createElement(A.Panel, {
    content: _react.default.createElement(CMS.ProfilePanel, null)
  }, _react.default.createElement(A.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_ProfileImage.default, {
    opacity: 1
  }), _react.default.createElement(_designSystemAtoms.Absolute, {
    bottom: 0,
    mb: "-13px",
    left: true,
    right: true,
    mx: "auto"
  }, _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    xxs: true,
    tag: "blue",
    onClick: box.enable
  }, "menu")))));
};

BoxLoginAvatar.defaultProps = {
  image: "QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE",
  name: 'Kames Geraghty',
  role: 'Fullstack Javascript Developer',
  employer: 'ConsenSys',
  panelContent: _react.default.createElement(A.Card, {
    content: "winning"
  })
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxLoginAvatar, props));

exports.default = _default;