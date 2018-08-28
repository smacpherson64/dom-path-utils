import { getAncestors } from './get-ancestors';
import { getSelector } from './get-selector';

export const getSelectorPath = element =>
  getAncestors(element)
    .map(getSelector)
    .join(' > ');
