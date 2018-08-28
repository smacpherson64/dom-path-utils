import { getId } from '../get-id';

describe('getId', () => {
  test('returns empty string for no id', () => {
    const results = getId(document.documentElement);
    expect(results).toBe('');
  });

  test('returns one class', () => {
    const element = document.createElement('div');
    element.setAttribute('id', 'test');

    const result = getId(element);
    expect(result).toBe('#test');
  });
});
