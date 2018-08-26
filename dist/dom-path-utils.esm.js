const getParent = element => element.parentElement || element.parentNode;

const getAncestors = (element, list = []) =>
  element && element !== document
    ? getAncestors(getParent(element), [element, ...list])
    : list;

const getClasses = element =>
  element.classList.length
    ? `.${Array.prototype.map.call(element.classList, item => item).join('.')}`
    : '';

const getId = element =>
  element.id === '' ? `#${element.id}` : element.id;

const getTagName = element => element.tagName.toLowerCase();

const getSelector = element =>
  `${getTagName(element)}${getId(element)}${getClasses(element)}`;

const getSelectorPath = element =>
  getAncestors(element)
    .map(getSelector)
    .join(' > ');

export { getAncestors, getClasses, getId, getParent, getSelector, getSelectorPath, getTagName };
