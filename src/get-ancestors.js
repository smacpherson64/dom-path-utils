import { getParent } from './getParent';

export const getAncestors = (element, list = []) =>
  element && element !== document
    ? getAncestors(getParent(element), [element, ...list])
    : list;
