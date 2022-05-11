/**
 * Returns a number
 *
 * @param {string} numbers - a string containing numbers.
 * @returns {number}
 */
export function add(numbers: string): number {
  if (numbers.length === 0) return 0;

  let delimiter = ',';
  let numbersToSplit: string = numbers;
  // identifying if there is a delimiter provided
  if (numbers.substring(0, 2) === '//') {
    const delimiterString = numbers.split('\n')[0];
    delimiter = delimiterString.substring(2);
    numbersToSplit = numbers.substring(delimiterString.length + 1); // adding the length of newline character
  }
  const splitNumbers: number[] = numbersToSplit
    .split(delimiter)
    .join('\n')
    .split('\n')
    .map((n) => parseInt(n)); // using split join split to make it simple and not resort to regex

  return splitNumbers.reduce(
    (previousValue: number, currentValue: number): number => {
      return previousValue + currentValue;
    },
    0,
  );
}
