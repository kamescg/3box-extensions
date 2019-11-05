"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

var _utilities = require("../utilities");

var _BoxLoginCard = _interopRequireDefault(require("./BoxLoginCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var BoxLoginAvatar = (_ref) => {
  var {
    variant,
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant", "children", "styled"]);

  return _react.default.createElement(A.Box, null, _react.default.createElement(_BoxLoginCard.default, null));
};

BoxLoginAvatar.defaultProps = {
  image: "QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE",
  name: 'Kames Geraghty',
  role: 'Fullstack Javascript Developer',
  employer: 'ConsenSys',
  panelContent: _react.default.createElement(A.Card, {
    content: "winning"
  })
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxLoginAvatar, props));

exports.default = _default;