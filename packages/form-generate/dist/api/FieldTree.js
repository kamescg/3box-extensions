"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-personal-space/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-personal-space/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-personal-space/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _designSystemMolecules = require("@horizin/design-system-molecules");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormFields = function FormFields(props) {
  return props.fields.map(function (field, index) {
    return _react["default"].createElement(_react["default"].Fragment, null, field.object === 'field' && _react["default"].createElement(_designSystemMolecules.Field, {
      register: props.register // Form State Handler
      ,
      errors: props.errors // Form Error Handler
      ,
      defaultValue: props.defaults ? props.defaults[field.name] : null,
      name: field.name,
      label: field.label,
      type: field.type,
      placeholder: field.placeholder,
      as: field.input,
      variants: ['text'],
      sx: _objectSpread({}, field.sx),
      sxWrapper: {
        width: '100%'
      }
    }), field.object === 'container' && Array.isArray(field.fields) && field.fields.length > 0 && _react["default"].createElement(Atom.Box, field.properties, _react["default"].createElement(FormFields, (0, _extends2["default"])({}, field, {
      styled: props.styled,
      register: props.register,
      errors: props.errors
    }))));
  });
};

var _default = FormFields;
exports["default"] = _default;