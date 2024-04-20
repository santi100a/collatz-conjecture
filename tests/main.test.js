const collatzSequence = require('..');

describe('collatzSequence', () => {
    test('returns the correct sequence for input 1', () => {
        expect(collatzSequence(1)).toEqual([1]);
    });

    test('returns the correct sequence for input 2', () => {
        expect(collatzSequence(2)).toEqual([2, 1]);
    });

    test('returns the correct sequence for input 5', () => {
        expect(collatzSequence(5)).toEqual([5, 16, 8, 4, 2, 1]);
    });

    test('throws an error for non-positive inputs', () => {
        expect(() => {
            collatzSequence(0);
        }).toThrow(TypeError);

        expect(() => {
            collatzSequence(-1);
        }).toThrow(TypeError);
    });

    test('throws an error for non-integer inputs', () => {
        expect(() => {
            collatzSequence(1.5);
        }).toThrow(TypeError);
        expect(() => {
            collatzSequence(-2.5);
        }).toThrow(TypeError);
    });
});
