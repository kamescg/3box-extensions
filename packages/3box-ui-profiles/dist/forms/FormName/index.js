"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _regenerator = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

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
  var nameFirst = (0, _idx["default"])(box, function (_) {
    return _.profile.id.name.first;
  });
  var nameLast = (0, _idx["default"])(box, function (_) {
    return _.profile.id.name.last;
  });
  var nameMiddle = (0, _idx["default"])(box, function (_) {
    return _.profile.id.name.middle;
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


  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(values) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              box.setInsert({
                access: 'public',
                index: 'id',
                key: 'name',
                input: values
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /* --- Component --- */


  return _react["default"].createElement("form", {
    style: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column'
    },
    onSubmit: handleSubmit(onSubmit)
  }, _react["default"].createElement(A.Flex, {
    flex: 1
  }, _react["default"].createElement(_designSystemMolecules.Field, {
    name: "first",
    placeholder: "First Name",
    label: "First Name",
    defaultValue: nameFirst,
    register: register,
    errors: errors,
    variants: ['text'],
    sxWrapper: {
      flex: 1
    }
  }), _react["default"].createElement(_designSystemMolecules.Field, {
    variants: ['text'],
    name: "middle",
    placeholder: "Middle",
    label: "Middle",
    defaultValue: nameMiddle,
    register: register,
    errors: errors,
    sxWrapper: {
      mx: 2
    }
  }), _react["default"].createElement(_designSystemMolecules.Field, {
    variants: ['text'],
    name: "last",
    placeholder: "Last Name",
    label: "Last Name",
    defaultValue: nameLast,
    register: register,
    errors: errors,
    sx: {
      flex: 3,
      p: 2
    }
  })), _react["default"].createElement(_designSystemAtoms.Button, (0, _extends2["default"])({}, props.sxButton, {
    disabled: !box.isLoggedIn
  }), props.label));
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