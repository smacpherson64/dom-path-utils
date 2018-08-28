import { getParent } from '../get-parent';

describe('getParent', () => {
  test('returns the parent element', () => {
    const results = getParent(document.body);
    expect(results).toBe(document.documentElement);
  });

  test('returns the correct results on detached elements', () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');

    parent.appendChild(child);

    const results = getParent(child);
    expect(results).toBe(parent);
  });
});
