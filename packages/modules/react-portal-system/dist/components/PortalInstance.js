"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactDom = require("react-dom");

var _default = (0, _react.forwardRef)((_ref, innerRef) => {
  var {
    children,
    open,
    style,
    top,
    left
  } = _ref;
  var container = (0, _react.useRef)(document.createElement('div'));

  var setRef = node => {
    if (innerRef) {
      typeof innerRef === 'function' ? innerRef(node) : innerRef.current = node;
    }
  };

  (0, _react.useEffect)(() => {
    setRef(container.current);
    container.current.style.cssText = "\n        color: blue;\n        border: 1px solid black;\n        position: absolute;\n        top: ".concat(Math.floor(top), "px;\n        left: ").concat(Math.floor(left), "px;\n        z-index: 1000\n      ");

    if (!document.body.contains(container.current)) {
      document.body.appendChild(container.current);
    }

    return () => {
      setRef(null);
      document.body.removeChild(container.current);
    };
  }, [top]);
  return (0, _reactDom.createPortal)(children, container.current);
});

exports.default = _default;