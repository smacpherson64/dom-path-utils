import { getAncestors } from './getAncestors';
import { getSelector } from './getSelector';

export const getSelectorPath = element =>
  getAncestors(element)
    .map(getSelector)
    .join(' > ');
