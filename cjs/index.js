"use strict";
var assertInteger = require("@santi100a/assertion-lib/cjs/integer");
module.exports = function collatzSequence(n) {
    assertInteger(n, 'n');
    if (n <= 0)
        throw new TypeError('n must be a positive non-zero integer');
    var numbers = [n];
    while (numbers[numbers.length - 1] !== 1) {
        if (numbers[numbers.length - 1] % 2 === 0) {
            // Even
            numbers.push(numbers[numbers.length - 1] / 2);
        }
        else {
            numbers.push(3 * numbers[numbers.length - 1] + 1);
        }
    }
    return numbers;
};
