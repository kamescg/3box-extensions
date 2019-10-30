"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AddressField = (_ref) => {
  var {
    name,
    register,
    placeholder,
    errors,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "register", "placeholder", "errors", "styled"]);

  var [address, setAddress] = (0, _react.useState)();
  return _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Field, {
    name: name,
    register: register,
    errors: errors,
    defaultValue: address,
    placeholder: placeholder,
    flex: 5,
    styled: {},
    styledOuter: {
      flex: 7
    }
  }), _react.default.createElement(_designSystem.Flex, {
    flex: 1,
    justifyContent: "flex-end"
  }, _react.default.createElement(_designSystem.Box, {
    textCenter: true,
    justifySelf: "flex-end",
    mx: 3
  }, _react.default.createElement(_designSystem.Toast, {
    content: _react.default.createElement(_designSystem.QRReader, {
      onSuccess: setAddress
    })
  }, _react.default.createElement(_designSystem.Span, {
    xs: true,
    pointer: true,
    bg: "blue",
    color: "white",
    variant: "tag",
    my: 3
  }, "Friends"))), _react.default.createElement(_designSystem.Box, {
    justifySelf: "flex-end"
  }, _react.default.createElement(_designSystem.Toast, {
    content: _react.default.createElement(_designSystem.QRReader, {
      onSuccess: setAddress
    })
  }, _react.default.createElement(_designSystem.Span, {
    pointer: true,
    bg: "gray",
    color: "charcoal",
    variant: "tag",
    my: 3
  }, "QR")))));
};

var _default = AddressField;
exports.default = _default;