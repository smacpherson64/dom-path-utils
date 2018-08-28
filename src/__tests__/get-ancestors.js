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

  test('returns the correct order of elements', () => {
    const results = getAncestors(document.body);
    expect(results[0]).toBe(document.documentElement);
    expect(results[1]).toBe(document.body);
    expect(results.length).toBe(2);
  });

  test('returns the correct results on detached elements', () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');
    const grandchild = document.createElement('div');

    child.appendChild(grandchild);
    parent.appendChild(child);

    const results = getAncestors(grandchild);

    expect(results.length).toBe(3);
    expect(results[0]).toBe(parent);
    expect(results[1]).toBe(child);
    expect(results[2]).toBe(grandchild);
  });
});
