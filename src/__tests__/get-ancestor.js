import { isElement } from './utils/is-element';
import { getAncestors } from '../getAncestor';

describe('getAncestors', () => {
  test('returns an array of elements', () => {
    const results = getAncestors(document.documentElement);
    expect(results.filter(isElement).length).toBe(1);
  });
});
