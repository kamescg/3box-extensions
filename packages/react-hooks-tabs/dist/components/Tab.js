"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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
  var data = _taggedTemplateLiteral(["\n", "\ndisplay: inline-block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabStyled = (0, _styledComponents.default)(_designSystemAtoms.Flex)(_templateObject(), props => (0, _styledSystem.variant)({
  variants: {
    tab: {
      bg: props.colorBackground,
      borderRadius: '0',
      cursor: 'pointer',
      flex: 1,
      textAlign: 'center',
      p: 3,
      "&.isSelected": {
        bg: props.colorBackgroundSelected,
        color: props.colorSelected,
        fontWeight: 700
      },
      "&:hover": {
        bg: props.colorBackgroundHover
      },
      "&.isSelected:hover": {
        bg: props.colorBackgroundSelected,
        color: props.colorSelected
      }
    },
    default: {
      borderRadius: '0',
      px: 10,
      py: 10,
      "&.isSelected": {
        bg: 'white'
      }
    },
    shadow: {
      bg: props.colorBackground,
      px: 10,
      py: 10,
      "&.isSelected": {
        bg: props.colorBackgroundSelected,
        boxShadow: "\n            34px -21px 10px -34px #00000047,\n            40px -5px 10px -34px #00000024,\n            40px 5px 10px -34px #00000024,\n            34px 21px 10px -34px #00000047\n          "
      },
      "&:hover": {
        boxShadow: "\n            34px -21px 10px -34px #00000017,\n            40px -5px 10px -34px #00000010,\n            40px 5px 10px -34px #00000010,\n            34px 21px 10px -34px #00000017\n          "
      },
      "&.isSelected:hover": {
        bg: props.colorBackgroundSelected,
        boxShadow: "\n            34px -21px 10px -34px #00000047,\n            40px -5px 10px -34px #00000024,\n            40px 5px 10px -34px #00000024,\n            34px 21px 10px -34px #00000047\n          "
      }
    },
    border: {
      borderLeftWidth: !props.borderLeft ? 0 : "".concat(typeof props.borderLeft === 'string' ? props.borderLeft : '2px', " !important"),
      borderRightWidth: !props.borderRight ? 0 : "".concat(typeof props.borderRight === 'string' ? props.borderRight : '2px', " !important"),
      borderTopWidth: !props.borderTop ? 0 : "".concat(typeof props.borderRight === 'string' ? props.borderRight : '2px', " !important"),
      borderBottomWidth: !props.borderBottom ? 0 : "".concat(typeof props.borderBottom === 'string' ? props.borderBottom : '2px', " !important"),
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: props.colorHighlight,
      px: 10,
      py: 10,
      "&.isSelected": {
        bg: props.colorBackgroundSelected,
        borderColor: props.colorHighlightSelected
      },
      "&:hover": {
        bg: props.colorBackgroundHover,
        borderColor: props.colorHighlightHover
      },
      "&.isSelected:hover": {
        bg: props.colorBackgroundSelected
      }
    },
    card: {
      bg: props.colorBackground,
      borderRadius: 0,
      px: 10,
      py: 10,
      "&:hover": {
        bg: props.colorBackgroundHover,
        borderColor: props.colorHighlightHover,
        borderWidth: 0,
        borderStyle: 'solid',
        borderTopWidth: '1px',
        borderColor: 'gray'
      },
      "&.isSelected": {
        bg: 'white',
        bg: props.colorBackgroundSelected,
        borderTop: '1px solid blue',
        borderColor: props.colorHighlightSelected
      }
    } // ...props.templates

  }
}));

var Tab = (_ref) => {
  var {
    id,
    tabGroup,
    disabled,
    hoverActivate,
    tabId,
    variant,
    className,
    styled,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "tabGroup", "disabled", "hoverActivate", "tabId", "variant", "className", "styled", "children"]);

  var state = (0, _react.useContext)(_Context.default);
  var {
    dispatch,
    variantDefault,
    inputs,
    tabs,
    selectedTabId,
    tabVariant
  } = state; // Grab Data from Global state.

  var isSelected = tabs && tabs[tabGroup] && tabs[tabGroup].selectedTabId === tabId; // Check IF selected tab.

  var template = variant || variantDefault; // Ranked variant input. 

  var inputSelected = inputs && inputs[template] ? inputs[template] : {}; // Check global inputs for template type.

  return _react.default.createElement(TabStyled, _extends({
    pointer: true,
    isSelected: isSelected
  }, tabVariant, props, styled, {
    variant: template
  }, inputSelected, {
    className: (0, _classnames.default)("tab", className, {
      isDisabled: disabled,
      isSelected
    }),
    onClick: () => dispatch({
      type: 'setTabSelected',
      tabGroup: tabGroup,
      tabId: tabId
    }),
    onMouseEnter: () => !hoverActivate ? null : dispatch({
      type: 'setTabSelected',
      tabId: tabId
    })
  }), children);
};

Tab.propTypes = {
  isSelected: _propTypes.default.bool,
  color: _propTypes.default.string,
  colorBackground: _propTypes.default.string,
  colorBackgroundSelected: _propTypes.default.string,
  colorBackgroundHover: _propTypes.default.string,
  colorHighlight: _propTypes.default.string,
  colorHighlightSelected: _propTypes.default.string,
  colorHighlightHover: _propTypes.default.string,
  variant: _propTypes.default.string
};
Tab.defaultProps = {
  color: 'inherit',
  colorSelected: 'white',
  colorHover: 'blue',
  colorBackground: 'transparent',
  colorBackgroundSelected: 'primary',
  colorBackgroundHover: 'rgba(255,255,255, 0.25)',
  colorHighlight: 'white',
  colorHighlightSelected: 'blue',
  colorHighlightHover: 'blue',
  display: 'inline-block',
  variant: 'tab'
};
var _default = Tab;
exports.default = _default;