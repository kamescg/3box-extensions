"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _effects = require("../effects");

var _effects2 = require("./effects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Card = (_ref) => {
  var {
    as,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["as", "children"]);

  var card = (0, _effects.useCardEffect)(props);
  var [sx, setSX] = (0, _react.useState)(_objectSpread({}, props.sx));
  var render;
  render = (0, _effects2.useMainRenderEffect)(props);
  /**
   * @name Global
   */

  (0, _react.useEffect)(() => {
    if (props.variants) {
      var style = sx;

      if (props.variants.includes('centered')) {
        Object.assign(style, {
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center'
        });
      }
    }
  }, [props.sxd]);
  return _react.default.createElement(_designSystemAtoms.Flex, {
    column: true,
    sx: _objectSpread({}, card, {}, sx)
  }, render.header, render.main, render.footer);
};

Card.propTypes = {
  componentHeader: _propTypes.default.node,
  componentMain: _propTypes.default.node,
  componentFooter: _propTypes.default.node,
  isHeader: _propTypes.default.bool,
  // Toggle Cover
  isMain: _propTypes.default.bool,
  // Toggle Main
  isFooter: _propTypes.default.bool,
  // Toggle Footer
  isLinkInsert: _propTypes.default.bool,
  // Toggle Link Insert
  isTitleLink: _propTypes.default.bool,
  // Toggle Link Insert
  isContentCentered: _propTypes.default.bool,
  // Flex Shorthand
  isMainCentered: _propTypes.default.bool,
  // Flex Shorthand
  mainRow: _propTypes.default.bool,
  // Flex Shorthand
  mainAlignCenter: _propTypes.default.bool,
  // Flex Shorthand
  mainBetween: _propTypes.default.bool,
  // Flex Shorthand
  delta: _propTypes.default.string,
  // Unique Identifier 
  to: _propTypes.default.string,
  // Routing
  toPrefix: _propTypes.default.string,
  // Routing
  linkProperties: _propTypes.default.object,
  // Routing Link
  sx: _propTypes.default.object,
  // ui-theme
  sxHeader: _propTypes.default.object,
  // ui-theme Header
  sxMain: _propTypes.default.object,
  // ui-theme Main
  sxFooter: _propTypes.default.object,
  // ui-theme Footer
  sxTitle: _propTypes.default.object,
  // ui-theme Title
  sxTagline: _propTypes.default.object,
  // ui-theme Title
  sxContent: _propTypes.default.object,
  // ui-theme Title
  sxSummary: _propTypes.default.object,
  // ui-theme Title
  sxTags: _propTypes.default.object // ui-theme Title

};
Card.defaultProps = {
  isCover: true,
  isContentCentered: false,
  toPrefix: '/',
  componentHeader: null,
  componentMain: undefined,
  sxHeaderDefault: {
    bg: 'blue',
    boxShadow: 1,
    flexDirection: 'column',
    p: 5
  },
  sxFooterDefault: {
    bg: 'smoke',
    p: 3
  }
};
var _default = Card;
exports.default = _default;