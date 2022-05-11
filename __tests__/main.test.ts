import { add } from '../src/main';

describe('Add', () => {
  // Assert greeter result
  it('should return 0 when empty string', () => {
    expect(add('')).toBe(0);
  });
  it('should return the same value when only one number', () => {
    expect(add('1')).toBe(1);
  });
});
