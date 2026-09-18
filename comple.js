/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const originalNum = num;

    let bits = 0;

    while (num > 0) {
        bits++;
        num >>= 1;
    }

    let mask = 0;

    for (let i = 0; i < bits; i++) {
        mask = (mask << 1) | 1;
    }

    return originalNum ^ mask;
};