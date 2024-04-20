import assertInteger = require('@santi100a/assertion-lib/cjs/integer');

/**
 * Calculates the Collatz sequence for a given number.
 * 
 * @param n The number to calculate the Collatz sequence for.
 * @returns An array of numbers representing the Collatz sequence.
 * @throws If n is not a positive non-zero integer.
 */
export = function collatzSequence(n: number): number[] {
    assertInteger(n, 'n');
    if (n <= 0) throw new TypeError('n must be a positive non-zero integer');
    const numbers = [n];
    while (numbers[numbers.length - 1] !== 1) {
        if (numbers[numbers.length - 1] % 2 === 0) {
            // Even
            numbers.push(numbers[numbers.length - 1] / 2);
        } else {
            numbers.push(3 * numbers[numbers.length - 1] + 1);
        }
    }
    return numbers;
}
