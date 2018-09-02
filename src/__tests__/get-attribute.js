import { getAttribute } from '../get-attribute';

describe('getAttribute', () => {
  test('returns empty string for no attribute', () => {
    const results = getAttribute('data-testid', document.documentElement);
    expect(results).toBe('');
  });

  test('returns the attribute in selector form if exists', () => {
    const element = document.createElement('div');
    element.setAttribute('data-testid', 'test');

    const result = getAttribute('data-testid', element);
    expect(result).toBe('[data-testid="test"]');
  });
});
