import { getClasses } from '../get-classes';

describe('getClasses', () => {
  test('returns empty string for no classes', () => {
    const results = getClasses(document.documentElement);
    expect(results).toBe('');
  });

  test('returns one class', () => {
    const element = document.createElement('div');
    element.classList.add('test');

    const classes = getClasses(element);
    expect(classes).toBe('.test');
  });

  test('returns multiple classes', () => {
    const element = document.createElement('div');
    element.classList.add('test');
    element.classList.add('test2');

    const classes = getClasses(element);
    expect(classes).toBe('.test.test2');
  });
});
