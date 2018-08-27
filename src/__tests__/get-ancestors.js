import { isElement } from './utils/is-element';
import { getAncestors } from '../get-ancestors';

describe('getAncestors', () => {
  test('returns an array', () => {
    const results = getAncestors(document.documentElement);
    expect(Array.isArray(results)).toBe(true);
  });

  test('returns an array of elements', () => {
    const results = getAncestors(document.documentElement);
    expect(results.filter(isElement).length).toBe(1);
  });

  test('returns the correct element', () => {
    const results = getAncestors(document.documentElement);
    expect(results[0]).toBe(document.documentElement);
  });
});
