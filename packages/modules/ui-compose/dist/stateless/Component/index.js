"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClassComponent = isClassComponent;
exports.isFunctionComponent = isFunctionComponent;
exports.isReactComponent = isReactComponent;
exports.isElement = isElement;
exports.isDOMTypeElement = isDOMTypeElement;
exports.isCompositeTypeElement = isCompositeTypeElement;
exports["default"] = void 0;

function isClassComponent(component) {
  return typeof component === 'export function' && !!component.prototype.isReactComponent ? true : false;
}

function isFunctionComponent(component) {
  return typeof component === 'export function' && String(component).includes('return React.createElement') ? true : false;
}

function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component) ? true : false;
}

function isElement(element) {
  return React.isValidElement(element);
}

function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
}

function isCompositeTypeElement(element) {
  return isElement(element) && typeof element.type === 'export function';
}

var _default = function _default(component) {
  return isReactComponent(component) ? component : isElement(component) ? React.cloneElement(component) : null;
};

exports["default"] = _default;