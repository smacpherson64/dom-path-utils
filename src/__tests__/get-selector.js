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

  test('returns the element with id and classes', () => {
    document.documentElement.id = 'test';
    document.documentElement.classList.add('test');
    document.documentElement.classList.add('test2');

    const results = getSelector(document.documentElement);
    expect(results).toBe('html#test.test.test2');
  });
});
