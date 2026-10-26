var singleNumber = function(nums) {
    let xor = 0;
    for (const n of nums) xor ^= n;

    const diff = xor & -xor;

    let a = 0, b = 0;
    for (const n of nums) {
        if (n & diff) a ^= n;
        else b ^= n;
    }
    return [a, b];
};