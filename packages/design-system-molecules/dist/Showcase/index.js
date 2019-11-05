"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystemAtoms = _interopRequireDefault(require("@horizin/design-system-atoms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Showcase = (_ref) => {
  var {
    as,
    sx,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["as", "sx", "children"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystemAtoms.default.Flex, {
    center: true,
    column: true,
    sx: sx,
    position: "relative"
  }, _react.default.createElement(_designSystemAtoms.default.BackgroundImage, {
    opacity: 1,
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }), _react.default.createElement(_designSystemAtoms.default.BackgroundGradient, {
    gradient: "blue",
    opacity: .74
  }), _react.default.createElement(_designSystemAtoms.default.Container, null, _react.default.createElement(_designSystemAtoms.default.Heading, {
    giga: true,
    as: "h5"
  }, props.title), _react.default.createElement(_designSystemAtoms.default.Heading, {
    md: true,
    heavy: true,
    mb: 6
  }, props.tagline), _react.default.createElement(_designSystemAtoms.default.Blockquote, {
    sx: {
      m: 0
    }
  }, props.content))));
};

var _default = Showcase;
exports.default = _default;