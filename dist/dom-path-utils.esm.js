const getParent = element => element.parentElement || element.parentNode;

const _getAncestors = (element, list = [], document = element.ownerDocument) =>
  element && element !== document
    ? _getAncestors(getParent(element), [element, ...list], document)
    : list;

const getAncestors = element => _getAncestors(element);

const getClasses = element =>
  element.classList.length
    ? `.${Array.prototype.map.call(element.classList, item => item).join('.')}`
    : '';

const getId = element =>
  element.id === '' ? element.id : `#${element.id}`;

const getTagName = element => element.tagName.toLowerCase();

const getAttribute = (attribute, element) =>
  element.getAttribute(attribute) === null
    ? ''
    : `[${attribute}="${element.getAttribute(attribute)}"]`;

const getSelector = (element, attributes = ['id', 'class']) => {
  const base = getTagName(element);

  if (Array.isArray(attributes) === false || attributes.length === 0) {
    return base;
  }

  return attributes.reduce((acc, attribute) => {
    switch (attribute) {
      case 'id':
        return `${acc}${getId(element)}`;
      case 'class':
        return `${acc}${getClasses(element)}`;
      default:
        return `${acc}${getAttribute(attribute, element)}`;
    }
  }, base);
};

const getSelectorPath = (element, attributes = ['id', 'class']) =>
  getAncestors(element)
    .map(element => getSelector(element, attributes))
    .join(' > ');

export { getAncestors, getClasses, getId, getParent, getSelector, getSelectorPath, getTagName };
