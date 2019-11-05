"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
 * @function FormProfile
 * @param {Object} props 
 * @param {Object} props.box 
 * @param {String} props.threadName 
 * 
 * @return {Component}
 */

/* --- Global --- */
var ProfileBasics = function ProfileBasics(_ref) {
  var box = _ref.box,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["box"]);

  var _useForm = (0, _reactHookForm["default"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var occupationJob = (0, _idx["default"])(box, function (_) {
    return _.profile.id.occupation.job;
  });
  var occupationEmployer = (0, _idx["default"])(box, function (_) {
    return _.profile.id.occupation.employer;
  });
  var occupationDescription = (0, _idx["default"])(box, function (_) {
    return _.profile.id.occupation.description;
  }); // Form Submit Handler

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
                key: 'occupation',
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

  return _react["default"].createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, _react["default"].createElement(A.Flex, null, _react["default"].createElement(_designSystemMolecules.Field, {
    name: "job",
    defaultValue: occupationJob,
    label: "Job",
    placeholder: "What you do.",
    register: register,
    errors: errors,
    styled: {
      flex: 1
    }
  }), _react["default"].createElement(_designSystemMolecules.Field, {
    name: "employer",
    defaultValue: occupationEmployer,
    label: "Work",
    placeholder: "Where you do it.",
    register: register,
    errors: errors,
    styled: {
      flex: 1,
      mx: 3
    }
  }), _react["default"].createElement(_designSystemMolecules.Field, {
    name: "description",
    defaultValue: occupationDescription,
    label: "Why",
    placeholder: "Why you do it.",
    register: register,
    errors: errors,
    styled: {
      flex: 1
    }
  })), _react["default"].createElement(_designSystemAtoms.Button, {
    sm: true,
    variant: "green",
    disabled: !box.isLoggedIn
  }, "Publish"));
};

var _default = function _default(props) {
  return _react["default"].createElement(_boxUiState.BoxInject, null, _react["default"].createElement(ProfileBasics, props));
};

exports["default"] = _default;