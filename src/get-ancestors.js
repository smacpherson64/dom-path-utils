import { getParent } from './get-parent';

const _getAncestors = (element, list = [], document = element.ownerDocument) =>
  element && element !== document
    ? _getAncestors(getParent(element), [element, ...list], document)
    : list;

export const getAncestors = element => _getAncestors(element);
