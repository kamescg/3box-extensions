"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystemMolecules = require("@horizin/design-system-molecules");

var _designSystemAtoms = require("@horizin/design-system-atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CodeCard = (_ref) => {
  var {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_designSystemAtoms.Container, {
    my: 3
  }, _react.default.createElement(_designSystemAtoms.Flex, {
    card: true,
    alignCenter: true,
    sx: {
      bg: 'neutral',
      color: 'text',
      p: 3,
      flex: 1,
      borderRadius: 8
    }
  }, _react.default.createElement(_designSystemAtoms.Flex, {
    column: true,
    flex: 2,
    sx: {
      flex: 3,
      p: 4
    }
  }, _react.default.createElement(_designSystemAtoms.Heading, {
    md: true,
    heavy: true
  }, props.title), _react.default.createElement(_designSystemAtoms.Paragraph, null, props.summary), props.example), _react.default.createElement(_designSystemAtoms.Flex, {
    column: true,
    flex: 2,
    sx: {
      flex: 3,
      p: 2
    }
  }, props.code && _react.default.createElement(_designSystemMolecules.CodeHighlight, null, props.code || children))));
};

exports.CodeCard = CodeCard;
CodeCard.propTypes = {
  title: _propTypes.default.string,
  summary: _propTypes.default.string
};