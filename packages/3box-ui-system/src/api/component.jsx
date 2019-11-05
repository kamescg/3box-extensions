export function isClassComponent(component) {
    return (
        typeof component === 'export function' && 
        !!component.prototype.isReactComponent
    ) ? true : false
}

export function isFunctionComponent(component) {
    return (
        typeof component === 'export function' && 
        String(component).includes('return React.createElement')
    ) ? true : false;
}

export function isReactComponent(component) {
    return (
        isClassComponent(component) || 
        isFunctionComponent(component)
    ) ? true : false;
}

export function isElement(element) {
    return React.isValidElement(element);
}

export function isDOMTypeElement(element) {
    return isElement(element) && typeof element.type === 'string';
}

export function isCompositeTypeElement(element) {
    return isElement(element) && typeof element.type === 'export function';
}

export const Component = component =>
isReactComponent(component)
    ? component
    : isElement(component)
      ? React.cloneElement(component)
      : null