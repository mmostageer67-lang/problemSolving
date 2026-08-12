/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    // Impossible to create m × n array
    if (original.length !== m * n) {
        return [];
    }

    let result = [];

    for (let i = 0; i < original.length; i += n) {
        result.push(original.slice(i, i + n));
    }

    return result;
};
