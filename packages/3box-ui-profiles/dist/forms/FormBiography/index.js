"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form"));

var _boxUiState = require("3box-ui-state");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _designSystemMolecules = require("@horizin/design-system-molecules");

/**
 * @function FormProfileName
 * @description Profile name input for 3Box Profile Standard 0.0.1
 * @version 1.0.0
 */

/* --- Global --- */
var FormProfileName = function FormProfileName(_ref) {
  var box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box"]);

  /* --- Passed State --- */
  var biographyQuote = (0, _idx["default"])(box, function (_) {
    return _.profile.details.quote;
  });
  var biographyContent = (0, _idx["default"])(box, function (_) {
    return _.profile.details.biography;
  });
  /* --- Internal State --- */

  var _useForm = (0, _reactHookForm["default"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;
  /**
   * @function onSubmit
   * @description Form Submission Handler
   * @param {Object} values 
   * @todo Add name validation.
   */


  var deleteDb = function deleteDb(values) {
    box.remove({
      access: 'public',
      key: 'details'
    });
  };

  var onSubmit = function onSubmit(values) {
    box.setInsert({
      access: 'public',
      index: 'details',
      input: values
    });
  };
  /* --- Component --- */


  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("form", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    onSubmit: handleSubmit(onSubmit)
  }, _react["default"].createElement(Atom.Flex, {
    flex: 1
  }, _react["default"].createElement(_designSystemMolecules.Field, {
    name: "biography",
    placeholder: "What are you about?",
    label: "Biography",
    as: "textarea",
    defaultValue: biographyContent,
    register: register,
    errors: errors,
    variants: ['text'],
    sx: {
      minHeight: 230
    },
    sxWrapper: {
      flex: 1
    }
  })), _react["default"].createElement(Atom.Button, (0, _extends2["default"])({
    type: "submit"
  }, props.sxButton, {
    disabled: !box.isLoggedIn
  }), props.label)));
};

FormProfileName.defaultProps = {
  label: 'Publish',
  sxButton: {
    alignSelf: 'flex-end',
    bg: 'blue',
    my: 3,
    color: 'white'
  }
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxContext, null, function (box) {
    return _react["default"].createElement(FormProfileName, (0, _extends2["default"])({
      box: box
    }, props));
  });
};

exports["default"] = _default;