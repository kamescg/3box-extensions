"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMainRenderEffect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HeaderDefault = _interopRequireDefault(require("./HeaderDefault"));

var _HeaderShowcase = _interopRequireDefault(require("./HeaderShowcase"));

var _MainDefault = _interopRequireDefault(require("./MainDefault"));

var _MainShowcase = _interopRequireDefault(require("./MainShowcase"));

var _FooterDefault = _interopRequireDefault(require("./FooterDefault"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @name Card
 * @description Standard Card Component with variant layout.s
 */

/* eslint-disable react-hooks/exhaustive-deps */
var useMainRenderEffect = props => {
  // Sub-Component States
  var [header, setComponentHeader] = (0, _react.useState)(props.componentHeader);
  var [main, setComponentMain] = (0, _react.useState)(props.componentMain);
  var [footer, setComponentFooter] = (0, _react.useState)(props.componentFooter);
  (0, _react.useEffect)(() => {
    switch (props.layout) {
      case 'default':
        setComponentHeader(_react.default.createElement(_HeaderDefault.default, props));
        setComponentMain(_react.default.createElement(_MainDefault.default, props));
        setComponentFooter(_react.default.createElement(_FooterDefault.default, props));
        break;

      case 'showcase':
        setComponentHeader(_react.default.createElement(_HeaderShowcase.default, props));
        setComponentMain(_react.default.createElement(_MainDefault.default, props));
        setComponentFooter(null);
        break;

      default:
        setComponentHeader(_react.default.createElement(_HeaderDefault.default, props));
        setComponentMain(_react.default.createElement(_MainDefault.default, props));
        setComponentFooter(_react.default.createElement(_FooterDefault.default, props));
        break;
    }
  }, [props.type]);
  return {
    header,
    main,
    footer
  };
};

exports.useMainRenderEffect = useMainRenderEffect;