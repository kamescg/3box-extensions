"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _boxUiState = require("3box-ui-state");

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _BoxAccess = _interopRequireDefault(require("../components/BoxAccess"));

var _effects = require("./effects");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StorageDelete = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  /* --- State --- */
  var [isRequested, setIsRequested] = (0, _react.useState)(false);
  /* --- Handlers --- */

  var deleteRequestHandler = () => setIsRequested(true);
  /* --- Effects --- */


  var isSpaceReady = (0, _effects.useSpaceReadyEffect)(box, props);
  /**
   * @function deleteRequestEffect
   * @description Handle User Input Request
   */

  (0, _react.useEffect)(() => {
    if (isRequested && props.space && props.index && props.delta) {
      box.delete({
        address: props.address,
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta
      });
    }
  }, [isRequested, props.data]);
  /* --- Component --- */

  return props.children ? _react.default.createElement(A.Span, {
    onClick: deleteRequestHandler
  }, props.children) : props.isClickToAccess ? _react.default.createElement(CMS.AccessSpace, {
    spaceAuto: true,
    level: "space",
    space: props.space,
    componentIsLoggedOut: props.componentIsLoggedOut,
    componentIsLoading: props.componentIsLoading,
    componentIsLoggedIn: props.componentIsLoggedIn
  }, _react.default.createElement(A.Span, {
    onClick: deleteRequestHandler
  }, props.componentIsSpaceOpen)) : isSpaceReady ? _react.default.createElement(A.Span, _extends({}, props.styledLablActive, {
    onClick: deleteRequestHandler
  }), props.componentIsSpaceOpen) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(A.Toast, {
    content: _react.default.createElement(DeleteAttemptMessage, null)
  }, _react.default.createElement(A.Flex, {
    alignCenter: true
  }, _react.default.createElement(A.Span, props.styledLablLoading, props.isLoadingComponent))));
};

var DeleteAttemptMessage = props => _react.default.createElement(A.Flex, {
  column: true
}, _react.default.createElement(A.Span, {
  xs: true,
  mb: 3
}, "Open Space to Complete Action"), _react.default.createElement(_BoxAccess.default, {
  level: "space",
  space: SPACE
}));

StorageDelete.defaultProps = {
  isClickToAccess: true,
  componentIsLoggedOut: _react.default.createElement(A.Span, {
    pointer: true,
    xxs: true,
    tag: "white",
    opacity: 1
  }, "Login ", _react.default.createElement(A.Span, {
    opacity: .6,
    pl: 1
  }, _react.default.createElement(A.LoadingSquare, null))),
  componentIsLoading: _react.default.createElement(A.Span, {
    pointer: true,
    xxs: true,
    tag: "white",
    opacity: 1
  }, "Loading ", _react.default.createElement(A.Span, {
    pl: 1
  }, _react.default.createElement(A.LoadingSquare, {
    className: "active"
  }))),
  componentIsLoggedIn: _react.default.createElement(A.Span, {
    pointer: true,
    xxs: true,
    tag: "white",
    opacity: 1
  }, _react.default.createElement(A.Span, {
    pl: 1
  }, _react.default.createElement(A.LoadingSquare, {
    className: "active"
  }))),
  componentIsSpaceOpen: _react.default.createElement(A.Span, {
    pointer: true,
    xxs: true,
    tag: "red"
  }, "Delete"),
  access: 'public',
  spaceAuto: true,
  styledLablActive: {
    variant: 'red'
  },
  styledLablLoading: {
    variant: 'white'
  },
  styledLoading: {
    xs: true,
    variant: 'white'
  },
  styled: {
    xs: true,
    variant: 'red'
  }
};
StorageDelete.propTypes = {
  spaceAuto: PropTypes.bool
};

var _default = props => _react.default.createElement(_boxUiState.BoxInject, null, _react.default.createElement(StorageDelete, props));

exports.default = _default;