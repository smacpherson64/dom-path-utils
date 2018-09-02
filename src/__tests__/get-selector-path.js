import { getSelectorPath } from '../get-selector-path';

describe('getSelectorPath', () => {
  test('returns the correct element', () => {
    const results = getSelectorPath(document.documentElement);
    expect(results).toBe('html');
  });

  test('returns the correct order of elements', () => {
    const results = getSelectorPath(document.body);
    expect(results).toBe('html > body');
  });

  test('returns the correct results on detached elements', () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');
    const grandchild = document.createElement('div');

    child.appendChild(grandchild);
    parent.appendChild(child);

    const results = getSelectorPath(grandchild);
    expect(results).toBe('div > div > div');
  });

  test('returns the correct results for custom attributes', () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');
    const grandchild = document.createElement('div');

    parent.classList.add('parent');
    child.setAttribute('data-custom-attribute', 'test');
    grandchild.id = 'grandchild';

    child.appendChild(grandchild);
    parent.appendChild(child);

    const results = getSelectorPath(grandchild, ['data-custom-attribute']);
    expect(results).toBe('div > div[data-custom-attribute="test"] > div');
  });
});
