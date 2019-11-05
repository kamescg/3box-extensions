"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _Link = _interopRequireDefault(require("../Link"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MenuItem = (_ref) => {
  var {
    children,
    label,
    to,
    icon,
    vertical
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "label", "to", "icon", "vertical"]);

  var [isOpen, setOpen] = (0, _react.useState)(props.expanded);
  var [sxChild, setStyleChild] = (0, _react.useState)(_objectSpread({}, props.sxChild));
  var [sxImageWrapper, setImageWrapper] = (0, _react.useState)({
    // bg: 'rgba(255,255,255,0.9)',
    // borderRadius: 9999,
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    // p: '8px',
    mr: 2 // width: 18

  });
  var [sxImageWrapperChild, setImageWrapperChild] = (0, _react.useState)({
    // bg: 'rgba(255,255,255,0.9)',
    // borderRadius: 9999,
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    // p: '8px',
    width: 15
  });
  (0, _react.useEffect)(() => {
    if (props.direction) if (props.direction === 'column') setStyleChild(_objectSpread({}, sxChild, {
      ml: 2,
      my: 1
    }));
  }, [props.direction]);
  return _react.default.createElement(_designSystemAtoms.Flex, {
    sx: props.sx,
    flexDirection: props.flexDirection || 'row'
  }, _react.default.createElement(_designSystemAtoms.Flex, {
    alignCenter: true,
    between: true,
    sx: _objectSpread({
      alignContent: 'center'
    }, props.styledWrapper),
    active: props.styledWrapperActive
  }, props.image && _react.default.createElement(_designSystemAtoms.Span, {
    sx: _objectSpread({}, sxImageWrapper)
  }, props.image), _react.default.createElement(_designSystemAtoms.Flex, {
    alignCenter: true,
    between: true,
    width: "100%"
  }, _react.default.createElement(WrapperLink, {
    to: to,
    sx: _objectSpread({}, props.styledItemDefaults, {}, props.styled, {
      opacity: .8,
      '&.active': {
        opacity: 1
      },
      '&:hover': props.hover
    }),
    active: props.active,
    getProps: _helpers.activateMenu
  }, _react.default.createElement(_designSystemAtoms.Span, props.styledLabel, label)), children &&
  /* Menu Item Children Toggle */
  _react.default.createElement("span", {
    onClick: () => setOpen(!isOpen)
  }, _react.default.createElement(_designSystemAtoms.Span, {
    sx: {
      cursor: 'pointer'
    },
    p: 2,
    width: 30,
    ml: "auto"
  }, _react.default.createElement(_designSystemAtoms.Span, {
    xxs: true,
    opacity: .3,
    transform: isOpen ? 'rotate(90deg)' : ''
  }, isOpen ? '▶' : '▶'))))), isOpen && children && _react.default.createElement(_designSystemAtoms.Flex, {
    flexDirection: props.flexDirection || 'row'
  }, children.map((c, index) => _react.default.createElement(_designSystemAtoms.Flex, {
    column: true,
    key: index,
    sx: sxChild
  }, _react.default.createElement(WrapperLink, {
    to: c.to,
    className: "child",
    sx: _objectSpread({}, props.styled, {
      opacity: .8,
      '&.active': {
        opacity: 1
      }
    })
  }, _react.default.createElement(_designSystemAtoms.Flex, {
    alignCenter: true,
    between: true,
    px: 2
  }, _react.default.createElement(_designSystemAtoms.Span, {
    xs: true
  }, c.label), _react.default.createElement(_designSystemAtoms.Span, {
    sx: _objectSpread({}, sxImageWrapperChild)
  }, c.image && c.image)))))));
};

MenuItem.defaultProps = {
  expanded: false,
  styledItemDefaults: {
    fontSize: 2,
    mx: 1,
    opacity: .8
  },
  styledItemDefaultsActive: {
    opacity: 1
  },
  styledWrapper: {}
};
/* ------- Component ------- */

var _default = (_ref2) => {
  var {
    items,
    label
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["items", "label"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(LabelMenu, {
    label: label
  }), _react.default.createElement(_designSystemAtoms.Flex, {
    flexDirection: props.direction || 'row',
    sx: props.sxMenu
  }, Array.isArray(items) && items.length > 0 && items.map((item, index) => _react.default.createElement(MenuItem, _extends({
    expanded: props.expanded,
    key: index,
    flexDirection: props.direction || 'row'
  }, item, props)))));
};

exports.default = _default;

var WrapperLink = (_ref3) => {
  var {
    sx,
    to,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["sx", "to", "children"]);

  return _react.default.createElement(_router.Match, {
    path: "".concat(to)
  }, props => _react.default.createElement(_Link.default, {
    to: to,
    className: props.match ? 'active' : 'inactive',
    sx: sx
  }, children));
};

var LabelMenu = props => {
  return props.label ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystemAtoms.Heading, {
    fontSize: [2],
    as: "h5",
    noMargin: true
  }, props.label), _react.default.createElement(_designSystemAtoms.HorizontalRule, {
    my: 2
  })) : null;
};