import { add } from '../src/main';

describe('Add', () => {
  // Assert greeter result
  it('should return 0 when empty string', () => {
    expect(add('')).toBe(0);
  });
  it('should return the same value when only one number', () => {
    expect(add('1')).toBe(1);
  });
  it('should return the sum of two values', () => {
    expect(add('1,2')).toBe(3);
  });
  it('should handle an unknown amount of numbers', () => {
    expect(add('1,2,4,6,7')).toBe(20);
    expect(add('1,2,6,7')).toBe(16);
  });
  it('should handle new lines between numbers (instead of commas)', () => {
    expect(add('1\n2,4')).toBe(7);
  });
  it('should support different delimiters using format "//[delimiter]\n[numbers…]"', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
  it('should support different delimiters and "\n"', () => {
    expect(add('//;\n1;2\n3')).toBe(6);
  });
});
