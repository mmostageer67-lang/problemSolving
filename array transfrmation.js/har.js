/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let har = 0;
    let n = x;

    while (n > 0) {
        har += n % 10;
        n = Math.floor(n / 10);
    }

    if (x % har === 0) {
        return har;
    }

    return -1;
};