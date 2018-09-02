export const getAttribute = (attribute, element) =>
  element.getAttribute(attribute) === null
    ? ''
    : `[${attribute}="${element.getAttribute(attribute)}"]`;
