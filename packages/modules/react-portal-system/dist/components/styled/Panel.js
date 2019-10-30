"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _reactTransitionGroup = require("react-transition-group");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PanelActions = (_ref) => {
  var {
    portal,
    label,
    content,
    styled,
    styledLabel,
    id
  } = _ref,
      props = _objectWithoutProperties(_ref, ["portal", "label", "content", "styled", "styledLabel", "id"]);

  var [style, setStyle] = (0, _react.useState)({
    bg: 'white',
    boxShadow: 0,
    p: 10,
    top: 0,
    bottom: 0,
    right: 0,
    position: 'fixed',
    minWidth: 300,
    zIndex: 100
  });
  var [isAnimating, setIsAnimating] = (0, _react.useState)(false);
  var [isOpening, setIsOpening] = (0, _react.useState)(false);

  var closeHandler = () => {
    setIsAnimating(false);
    setTimeout(() => {
      portal.closePanels();
    }, 300);
  };

  (0, _react.useEffect)(() => {
    if (!isOpening && !isAnimating) {
      setIsOpening(true);
      setIsAnimating(true);
    }
  }, [isOpening, isAnimating]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: isAnimating,
    timeout: 300,
    classNames: "fadeIn"
  }, _react.default.createElement(_designSystemAtoms.Fixed, {
    sx: {
      bg: 'night',
      opacity: 0.2,
      zIndex: 90
    },
    fillContainer: true,
    onClick: closeHandler
  })), _react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: isAnimating,
    timeout: 300,
    classNames: "fadeInLeft"
  }, !isOpening ? _react.default.createElement("div", null) : _react.default.createElement(_designSystemAtoms.Box, {
    sx: style
  }, label && _react.default.createElement(_designSystemAtoms.Flex, _extends({
    alignCenter: true,
    between: true,
    fullWidth: true,
    gradient: "gray",
    p: 10
  }, styledLabel), _react.default.createElement(_designSystemAtoms.Span, {
    fontSize: [3]
  }, label), _react.default.createElement(_designSystemAtoms.Span, {
    pointer: true,
    md: true,
    heavy: true,
    pointer: true,
    onClick: closeHandler
  }, "X")), _react.default.createElement(_designSystemAtoms.Box, null, content && _react.default.isValidElement(content) ? _react.default.cloneElement(content) : content))));
};

var _default = PanelActions;
exports.default = _default;