/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) {
            return false;
        }

        seen.add(n);
        n = getNext(n);
    }

    return true;
};

function getNext(n) {
    let sum = 0;

    for (const digit of String(n)) {
        sum += Number(digit) ** 2;
    }

    return sum;
}