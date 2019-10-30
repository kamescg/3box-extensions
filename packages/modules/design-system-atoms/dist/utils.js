"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withoutProps = exports.ignoreList = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ignoreList = ['alignItems', 'alignSelf', 'justifyItems', 'boxShadow', 'borderRadius', 'color', 'gradient', 'gradientDir', 'fill', 'fontFamily', 'fontSize', 'fontWeight', 'm', 'my', 'mx', 'ml', 'mr', 'mt', 'mb', 'p', 'py', 'px', 'pl', 'pr', 'pt', 'pb', 'position', 'top', 'bottom', 'left', 'right', 'relative', 'fill', 'absolute', 'fullWidth', 'minHeight', 'flexDirection', 'maxWidth', 'width', 'zIndex', 'height', 'maxHeight', 'overflow', 'isActive', 'colorHighlightSelected', 'colorHighlightHover', 'colorBackgroundHover', 'colorBackgroundSelected', 'colorBackground', 'colorSelected', 'card', 'flexDirection', 'register', 'textRight', 'borderBottom', 'borderTop', 'between', 'justifyEnd', 'alignCenter', 'colorHover', ''];
/**
 * @function withoutProps
 * @description Remove props from child components.
 * @param {Array} omitProps 
 */

exports.ignoreList = ignoreList;

var withoutProps = omitProps => {
  var omitSingle = function omitSingle() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var key = arguments.length > 1 ? arguments[1] : undefined;
    if (key === null || key === undefined || !(key in object)) return object;

    var {
      [key]: deleted
    } = object,
        otherKeys = _objectWithoutProperties(object, [key].map(_toPropertyKey));

    return otherKeys;
  };

  var omit = function omit() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var keys = arguments.length > 1 ? arguments[1] : undefined;
    if (!keys) return object;

    if (Array.isArray(keys)) {
      // calling omitMultiple here would result in a second array check
      return keys.reduce((result, key) => {
        if (key in result) {
          return omitSingle(result, key);
        }

        return result;
      }, object);
    }

    return omitSingle(object, keys);
  }; // HoF


  return C => {
    return (_ref) => {
      var {
        children
      } = _ref,
          props = _objectWithoutProperties(_ref, ["children"]);

      return _react.default.createElement(C, omit(props, omitProps), children);
    }; // return WithoutPropsComponent;
  };
};

exports.withoutProps = withoutProps;