/**
 * Returns a number
 *
 * @param {string} numbers - a string containing numbers.
 * @returns {number}
 */
export function add(numbers: string): number {
  if (numbers.length === 0) return 0;
  const splitNumbers: number[] = numbers.split(',').map(parseInt);

  return splitNumbers.reduce(
    (previousValue: number, currentValue: number): number => {
      return previousValue + currentValue;
    },
    0,
  );
}
