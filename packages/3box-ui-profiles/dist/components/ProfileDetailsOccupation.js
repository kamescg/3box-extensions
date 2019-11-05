"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileDetailsOccupation = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/admin/Documents/GitHub/opensource/3box-extensions/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _boxUiSystemRender = require("3box-ui-system-render");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ProfileDetailsOccupation = function ProfileDetailsOccupation(props) {
  return _react["default"].createElement(_boxUiSystemRender.StorageRender, {
    access: "public",
    selector: "details.occupation",
    component: ProfileDetailsOccupationView,
    pass: props
  });
};

exports.ProfileDetailsOccupation = ProfileDetailsOccupation;

var ProfileDetailsOccupationView = function ProfileDetailsOccupationView(_ref) {
  var job = _ref.job,
      employer = _ref.employer,
      description = _ref.description,
      sx = _ref.sx,
      sxJob = _ref.sxJob,
      sxEmployer = _ref.sxEmployer,
      sxDescription = _ref.sxDescription,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["job", "employer", "description", "sx", "sxJob", "sxEmployer", "sxDescription"]);
  return _react["default"].createElement(Atom.Heading, {
    sx: _objectSpread({}, sx)
  }, _react["default"].createElement(Atom.Span, {
    className: "job",
    sx: _objectSpread({}, sxJob)
  }, job), _react["default"].createElement(Atom.Span, {
    className: "employer",
    sx: _objectSpread({
      mx: 1
    }, sxEmployer)
  }, employer), _react["default"].createElement(Atom.Span, {
    className: "description",
    sx: _objectSpread({}, sxDescription)
  }, description));
};

ProfileDetailsOccupationView.defaultProps = {};