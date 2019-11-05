"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _boxUiState = require("3box-ui-state");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* --- Global Dependencies --- */
var BoxOpenSpace = (_ref) => {
  var {
    box,
    auto,
    space,
    styled,
    styledLoading,
    componentLoading,
    children
  } = _ref;
  var [loading, setLoading] = (0, _react.useState)(false);
  /**
   * @function ComponentActionHandler
   * @description Handle component click event. 
   */

  var actionHandler = () => {
    if (typeof space === 'undefined') throw new Error('space undefined');
    box.openSpace(space);
    setLoading(true);
  };
  /**
   * @function AutoEffect
   * @description Automatically connect to space without requiring use input.
   */


  (0, _react.useEffect)(() => {
    if (!box.auth.spaces[space] && auto && typeof space !== 'undefined') {
      box.openSpace(space);
      setLoading(true);
    }
  }, [auto]);
  return !auto ? loading ? componentLoading ? componentLoading : _react.default.createElement(_designSystemAtoms.Box, {
    fullWidth: true
  }, _react.default.createElement(_designSystemAtoms.Button, styledLoading, "Loading Space...")) : children ? _react.default.createElement(_designSystemAtoms.Span, {
    onClick: actionHandler
  }, children) : _react.default.createElement(_designSystemAtoms.Box, {
    fullWidth: true,
    onClick: actionHandler
  }, _react.default.createElement(_designSystemAtoms.Button, styled, "open ", _react.default.createElement("strong", null, " ", space, " "), " space")) : null;
};

BoxOpenSpace.defaultProps = {
  threadName: undefined,
  labelLoading: 'Loading Space...',
  styled: {
    xs: true,
    fontWeight: 'normal',
    width: '100%'
  },
  styledLoading: {
    width: '100%'
  }
};
BoxOpenSpace.propTypes = {
  space: _propTypes.default.string.isRequired
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(BoxOpenSpace, props));

exports.default = _default;