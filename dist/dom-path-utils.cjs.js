'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getParent = element => element.parentElement || element.parentNode;

const _getAncestors = (element, list = []) =>
  element && element !== document
    ? _getAncestors(getParent(element), [element, ...list])
    : list;

const getAncestors = element => _getAncestors(element);

const getClasses = element =>
  element.classList.length
    ? `.${Array.prototype.map.call(element.classList, item => item).join('.')}`
    : '';

const getId = element =>
  element.id === '' ? element.id : `#${element.id}`;

const getTagName = element => element.tagName.toLowerCase();

const getSelector = element =>
  `${getTagName(element)}${getId(element)}${getClasses(element)}`;

const getSelectorPath = element =>
  getAncestors(element)
    .map(getSelector)
    .join(' > ');

exports.getAncestors = getAncestors;
exports.getClasses = getClasses;
exports.getId = getId;
exports.getParent = getParent;
exports.getSelector = getSelector;
exports.getSelectorPath = getSelectorPath;
exports.getTagName = getTagName;
