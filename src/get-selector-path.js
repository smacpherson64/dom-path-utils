import { getAncestors } from './get-ancestors';
import { getSelector } from './get-selector';

export const getSelectorPath = (element, attributes = ['id', 'class']) =>
  getAncestors(element)
    .map(element => getSelector(element, attributes))
    .join(' > ');
