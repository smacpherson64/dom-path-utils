import { getParent } from './get-parent';

export const getAncestors = (element, list = []) =>
  element && element !== document
    ? getAncestors(getParent(element), [element, ...list])
    : list;
