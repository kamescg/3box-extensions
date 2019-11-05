"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _Context = _interopRequireDefault(require("../Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabListStyled = (0, _styledComponents.default)(_designSystemAtoms.Flex)(_templateObject(), (0, _styledSystem.variant)({
  variants: {
    default: {
      bg: 'white',
      boxShadow: 1,
      borderRadius: '0 0 10px 10px',
      padding: 20
    }
  }
}));

var TabList = (_ref) => {
  var {
    id,
    tabGroup,
    tabIdSelected,
    template,
    isActive,
    variant,
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "tabGroup", "tabIdSelected", "template", "isActive", "variant", "children", "styled"]);

  var state = (0, _react.useContext)(_Context.default);
  /**
   * @function TemplateLoader
   * @description Load global tabs templates.
   */

  (0, _react.useEffect)(() => {
    state.dispatch({
      type: 'setTabSelected',
      tabGroup: tabGroup,
      tabId: tabIdSelected
    });
  }, [state.dispatch]);
  return _react.default.createElement(TabListStyled, _extends({
    flexDirection: "row",
    variant: variant
  }, styled, props), children && Array.isArray(children) ? children.map(child => _react.default.isValidElement(child) ? _react.default.cloneElement(child, {
    tabGroup,
    variant: template
  }) : null) : _react.default.cloneElement(children, {
    tabGroup,
    variant: template
  }));
};

TabList.propTypes = {
  isActive: _propTypes.default.bool,
  variant: _propTypes.default.string
};
var _default = TabList;
exports.default = _default;