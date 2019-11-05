"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PortalCreate = _interopRequireDefault(require("./PortalCreate"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _Context = _interopRequireDefault(require("../Context"));

var _Modal = _interopRequireDefault(require("./styled/Modal"));

var _Panel = _interopRequireDefault(require("./styled/Panel"));

var _Toast = _interopRequireDefault(require("./styled/Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Component = (_ref) => {
  var {
    isOpen,
    close,
    Content,
    className,
    activeClassName,
    backgroundClassName,
    label,
    layoutDefault,
    position,
    positionStyle,
    styled,
    styledBackground,
    styledModal
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isOpen", "close", "Content", "className", "activeClassName", "backgroundClassName", "label", "layoutDefault", "position", "positionStyle", "styled", "styledBackground", "styledModal"]);

  return _react.default.createElement(_Context.default.Consumer, null, portal => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_PortalCreate.default, {
    id: "portal"
  }, portal.isActive && portal.store.panels && Array.isArray(portal.store.panels) && portal.store.panels.length > 0 && _react.default.createElement(_react.default.Fragment, null, portal.store.panels.map(panel => _react.default.createElement(_Panel.default, _extends({
    portal: portal
  }, panel)))), portal.isActive && portal.store.modals && Array.isArray(portal.store.modals) && portal.store.modals.length > 0 && _react.default.createElement(_react.default.Fragment, null, portal.store.modals.map(modal => _react.default.createElement(_Modal.default, _extends({
    portal: portal
  }, modal)))), portal.store.toasts && Array.isArray(portal.store.toasts) && portal.store.toasts.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystemAtoms.Fixed, {
    sx: {
      top: 0,
      right: 0,
      m: 3,
      zIndex: 100
    }
  }, portal.store.toasts.map((panel, key) => _react.default.createElement(_Toast.default, _extends({
    key: panel.delta,
    id: key,
    portal: portal
  }, panel))))))));
};

Component.propTypes = {
  isOpen: _propTypes.default.bool,
  close: _propTypes.default.func,
  open: _propTypes.default.func,
  Content: _propTypes.default.func,
  className: _propTypes.default.string,
  activeClassName: _propTypes.default.string,
  backgroundClassName: _propTypes.default.string
};
var _default = Component;
exports.default = _default;