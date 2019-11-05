"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComponentMainDefault = props => {
  var [sxMain, setSXMain] = (0, _react.useState)({});
  var [sxTitle, setSXTitle] = (0, _react.useState)({
    fontSize: 4,
    as: 'h2'
  });
  var [sxTagline, setSXTagline] = (0, _react.useState)({
    fontSize: 2,
    as: 'h4'
  });
  var [sxImage, setSXImage] = (0, _react.useState)(_objectSpread({}, props.sxImage));
  var [sxImageWrap, setSXImageWrap] = (0, _react.useState)(_objectSpread({}, props.sxImageWrap));
  var [sxContent, setSXContent] = (0, _react.useState)({
    fontSize: 1
  });
  var [sxSummary, setSXSummary] = (0, _react.useState)({
    fontSize: 1
  });
  (0, _react.useEffect)(() => {
    if (props.variantsMain) {
      var style = sxMain;

      if (props.variantsMain.includes('centered')) {
        Object.assign(style, {
          alignItems: 'center',
          textAlign: 'center'
        });
      } // Border Radius


      if (props.variantsMain.includes('rounded')) {
        Object.assign(style, {
          borderRadius: 20
        });
      }

      if (props.variantsMain.includes('gem')) {
        Object.assign(style, {
          borderRadius: '10px 45px 10px 20px'
        });
      } //Box Shadow


      if (props.variantsMain.includes('raised')) Object.assign(style, {
        boxShadow: 1
      });
      if (props.variantsMain.includes('lifted')) Object.assign(style, {
        boxShadow: 2
      }); // Width Contraints

      if (props.variantsMain.includes('scopedMedium')) {
        Object.assign(style, {
          maxWidth: 420
        });
      }

      if (!props.sxIgnoreDefaults) {
        Object.assign(style, {
          bg: 'white',
          p: 4
        });
      }

      console.log(style, 'variantsMainvariantsMain');
      setSXMain(_objectSpread({}, style));
    }
  }, [props.sxMain]);
  (0, _react.useEffect)(() => {
    var style = sxImage;
    var styleWrap = sxImageWrap;

    if (!props.sxIgnoreDefaults) {
      Object.assign(styleWrap, {
        bg: 'white',
        borderRadius: 9999,
        maxWidth: 220,
        p: 3
      });
    }

    if (props.variantsImage) {
      /* Image
      /* ------------- */
      // Border Radius
      if (props.variantsImage.includes('circle')) {
        Object.assign(style, {});
        Object.assign(styleWrap, {
          borderRadius: 9999
        });
      } //Box Shadow


      if (props.variantsImage.includes('raised')) Object.assign(styleWrap, {
        boxShadow: 1
      });
      if (props.variantsImage.includes('lifted')) Object.assign(styleWrap, {
        boxShadow: 2
      });
      setSXImage(_objectSpread({}, style));
    }

    setSXImageWrap(_objectSpread({}, styleWrap));
  }, [sxImageWrap || props.variantsImage]);
  console.log(sxMain, 'sxMainsxMain');
  return _react.default.createElement(_designSystemAtoms.Flex, {
    sx: _objectSpread({
      flexDirection: 'column'
    }, sxMain)
  }, props.image && _react.default.createElement(_designSystemAtoms.Span, {
    sx: _objectSpread({}, sxImageWrap)
  }, _react.default.createElement(_designSystemAtoms.Image, {
    src: props.image,
    sx: sxImage
  })), _react.default.createElement(_designSystemAtoms.Heading, {
    sx: sxTitle
  }, props.title), _react.default.createElement(_designSystemAtoms.Heading, {
    md: true,
    heavy: true,
    sx: sxTagline
  }, props.tagline), props.summary && _react.default.createElement(_designSystemAtoms.Text, {
    sx: sxSummary
  }, props.summary), props.content && _react.default.createElement(_designSystemAtoms.Text, {
    sx: sxContent
  }, props.content));
};

var _default = ComponentMainDefault;
exports.default = _default;