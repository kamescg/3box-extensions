"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystemAtoms = require("@horizin/design-system-atoms");

var _designSystemMolecules = require("@horizin/design-system-molecules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComponentMainDefault = props => {
  var [sxMain, setSXMain] = (0, _react.useState)(_objectSpread({}, props.sxMain));
  var [sxTitle, setSXTitle] = (0, _react.useState)(_objectSpread({
    fontSize: 3,
    fontWeight: 500
  }, props.sxTitle));
  var [sxTagline, setSXTagline] = (0, _react.useState)(_objectSpread({
    fontSize: 2,
    fontWeight: 400
  }, props.sxTagline));
  var [sxImage, setSXImage] = (0, _react.useState)(_objectSpread({}, props.sxImage));
  var [sxImageWrap, setSXImageWrap] = (0, _react.useState)(_objectSpread({}, props.sxImageWrap));
  var [sxContent, setSXContent] = (0, _react.useState)(_objectSpread({
    fontSize: 1
  }, props.sxContent));
  var [sxSummary, setSXSummary] = (0, _react.useState)(_objectSpread({
    fontSize: 1
  }, props.sxSummary));
  /**
   * @name Global
   */

  (0, _react.useEffect)(() => {
    var style = sxMain;
    if (props.mainRow) Object.assign(style, {
      flexDirection: 'row'
    });
    if (props.mainAlignCenter) Object.assign(style, {
      alignItems: 'center'
    });
    if (props.mainBetween) Object.assign(style, {
      justifyContent: 'space-between'
    });
    setSXMain(style);
  }, [props]);
  (0, _react.useEffect)(() => {
    if (props.variants) {
      var style = sxMain;
      var styleTitle = sxTitle;
      var styleTagline = sxTagline;
      var styleContent = sxContent;
      var styleSummary = sxSummary;

      if (props.variants.includes('small')) {
        Object.assign(styleTitle, {
          fontSize: 2
        });
        Object.assign(styleTagline, {
          fontSize: 1
        });
        Object.assign(styleContent, {
          fontSize: 0
        });
        Object.assign(styleSummary, {
          fontSize: 0
        });
      }

      if (props.variants.includes('large')) {
        Object.assign(styleTitle, {
          fontSize: 6
        });
        Object.assign(styleTagline, {
          fontSize: 4
        });
      }

      if (props.variants.includes('xlarge')) {
        Object.assign(styleTitle, {
          fontSize: 7
        });
        Object.assign(styleTagline, {
          fontSize: 5
        });
        Object.assign(styleSummary, {
          fontSize: 2
        });
      }

      if (props.variants.includes('centered')) {
        Object.assign(style, {
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center'
        });
      } // Border Radius


      if (props.variants.includes('rounded')) {
        Object.assign(style, {
          borderRadius: 20
        });
      }

      if (props.variants.includes('gem')) {
        Object.assign(style, {
          borderRadius: '10px 45px 10px 20px'
        });
      } //Box Shadow


      if (props.variants.includes('raised')) Object.assign(style, {
        boxShadow: 1
      });
      if (props.variants.includes('lifted')) Object.assign(style, {
        boxShadow: 2
      }); // Width Contraints

      if (props.variants.includes('scopedMedium')) {
        Object.assign(style, {
          maxWidth: 420
        });
      }

      if (props.variants.includes('scopedLarge')) {
        Object.assign(style, {
          maxWidth: 640
        });
      }

      if (props.variants.includes('scopedXLarge')) {
        Object.assign(style, {
          maxWidth: 940
        });
      }
    }
  }, [props.variants]);
  /**
   * @name Main
   */

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

      if (props.variantsMain.includes('scopedLarge')) {
        Object.assign(style, {
          maxWidth: 640
        });
      }

      if (!props.sxIgnoreDefaults) {
        Object.assign(style, {});
      }

      setSXMain(_objectSpread({}, style));
    }
  }, [props.sxMain]);
  (0, _react.useEffect)(() => {
    var style = sxImage;
    var styleWrap = sxImageWrap;

    if (!props.sxIgnoreDefaults) {
      Object.assign(styleWrap, {
        maxWidth: 120
      });
    }

    if (props.variantsImage) {
      /* Image
      /* ------------- */
      if (props.variantsImage.includes('icon')) {
        Object.assign(style, {});
        Object.assign(styleWrap, {
          bg: 'white',
          borderRadius: 9999,
          boxShadow: 1,
          p: 3
        });
      } // Border Radius


      if (props.variantsImage.includes('circle')) {
        Object.assign(style, {});
        Object.assign(styleWrap, {
          borderRadius: 9999
        });
      }

      if (props.variantsImage.includes('gem')) Object.assign(styleWrap, {
        borderRadius: '10px 45px 10px 20px'
      });
      if (props.variantsImage.includes('gemX')) Object.assign(styleWrap, {
        borderRadius: '45px 10px 20px 10px'
      }); //Box Shadow

      if (props.variantsImage.includes('raised')) Object.assign(styleWrap, {
        boxShadow: 1
      });
      if (props.variantsImage.includes('lifted')) Object.assign(styleWrap, {
        boxShadow: 2
      });
      setSXImage(_objectSpread({}, style));
    }

    setSXImageWrap(_objectSpread({}, styleWrap));
  }, [props.variantsImage]);
  return _react.default.createElement(_designSystemAtoms.Flex, {
    sx: _objectSpread({
      flexDirection: 'column'
    }, sxMain)
  }, _react.default.createElement(_designSystemAtoms.Flex, {
    sx: props.sxDetails
  }, props.image && _react.default.createElement(_designSystemAtoms.Span, {
    sx: _objectSpread({}, sxImageWrap)
  }, _react.default.createElement(_designSystemAtoms.Image, {
    src: props.image,
    sx: sxImage
  })), _react.default.createElement(_designSystemAtoms.Box, null, props.title && _react.default.createElement(_designSystemAtoms.Heading, {
    sx: sxTitle
  }, props.isTitleLink && props.to ? _react.default.createElement(_designSystemMolecules.Link, {
    to: "".concat(props.toPrefix).concat(props.to)
  }, props.title) : props.title), props.tagline && _react.default.createElement(_designSystemAtoms.Heading, {
    md: true,
    heavy: true,
    sx: sxTagline
  }, props.tagline))), props.summary && _react.default.createElement(_designSystemAtoms.Text, {
    as: "p",
    sx: sxSummary
  }, props.summary), props.content && _react.default.createElement(_designSystemAtoms.Text, {
    sx: sxContent
  }, props.content), props.actions && props.actions, props.isLinkInsert && _react.default.createElement(_designSystemMolecules.Link, _extends({
    to: "".concat(props.toPrefix).concat(props.to)
  }, props.linkProperties), "View"));
};

var _default = ComponentMainDefault;
exports.default = _default;