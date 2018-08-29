import { getTagName } from '../get-tag-name';

describe('getTagName', () => {
  test('returns the correct element', () => {
    const results = getTagName(document.documentElement);
    expect(results).toBe('html');
  });
});
