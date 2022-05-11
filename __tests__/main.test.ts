import { add } from '../src/main';

describe('Add', () => {
  // Assert greeter result
  it('should return 0 when empty string', () => {
    expect(add('')).toBe(0);
  });
});
