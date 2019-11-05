"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form"));

var _FieldTree = _interopRequireDefault(require("./FieldTree"));

/**
 * @name FormGenerate
 * @description Generate forms from schema reference.
 * @version 0.0.1
 */

/* --- Global --- */

/* --- Local --- */

/* --- Component --- */
var FormDynamic = function FormDynamic(_ref) {
  var sxButton = _ref.sxButton,
      box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["sxButton", "box"]);

  var _useForm = (0, _reactHookForm["default"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  console.log(props, 'form dynamic');

  var onSubmit = function onSubmit(values) {
    return props.onSubmit && props.onSubmit(values);
  };

  return _react["default"].createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, _react["default"].createElement(A.Flex, {
    flex: 1
  }, _react["default"].createElement(_FieldTree["default"], {
    fields: props.schema.fields,
    register: register,
    errors: errors,
    defaults: props.defaults
  })), _react["default"].createElement(Atom.Box, {
    sx: {
      py: 3
    }
  }, _react["default"].createElement(A.Button, {
    type: "submit",
    variant: "green",
    sx: sxButton
  }, props.label)));
};

FormDynamic.defaultProps = {
  label: 'Submit'
};

var _default = function _default(props) {
  return _react["default"].createElement(FormDynamic, props);
};

exports["default"] = _default;