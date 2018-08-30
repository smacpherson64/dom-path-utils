import { getParent } from './get-parent';

const _getAncestors = (element, list = []) =>
  element && element !== document
    ? _getAncestors(getParent(element), [element, ...list])
    : list;

export const getAncestors = element => _getAncestors(element);
