import { getSelector } from '../get-selector';

afterEach(() => {
  document.documentElement.removeAttribute('id');
  document.documentElement.removeAttribute('class');
});

describe('getSelector', () => {
  test('returns the correct element', () => {
    const results = getSelector(document.documentElement);
    expect(results).toBe('html');
  });

  test('returns the element with an id', () => {
    document.documentElement.id = 'test';
    const results = getSelector(document.documentElement);
    expect(results).toBe('html#test');
  });

  test('returns the element with classes', () => {
    document.documentElement.classList.add('test');
    document.documentElement.classList.add('test2');

    const results = getSelector(document.documentElement);
    expect(results).toBe('html.test.test2');
  });

  test('returns the element with generic attribute', () => {
    document.documentElement.setAttribute('data-testid', 'test');

    const results = getSelector(document.documentElement, [
      'id',
      'class',
      'data-testid',
    ]);
    expect(results).toBe('html[data-testid="test"]');
  });

  test('returns the element with id, classes, and generic attributes', () => {
    document.documentElement.id = 'test';
    document.documentElement.classList.add('test');
    document.documentElement.classList.add('test2');
    document.documentElement.setAttribute('data-testid', 'test');

    const results = getSelector(document.documentElement, [
      'id',
      'class',
      'data-testid',
    ]);
    expect(results).toBe('html#test.test.test2[data-testid="test"]');
  });

  test('returns just the tagname when array is empty', () => {
    document.documentElement.id = 'test';
    document.documentElement.classList.add('test');
    document.documentElement.classList.add('test2');
    document.documentElement.setAttribute('data-testid', 'test');

    const results = getSelector(document.documentElement, []);
    expect(results).toBe('html');
  });
});
