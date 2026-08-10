var getMaximumGenerated = function(n) {
    if (n === 0) return 0;

    let nums = [];

    nums[0] = 0;
    nums[1] = 1;

    for (let i = 1; i <= n; i++) {
        if (2 * i <= n) {
            nums[2 * i] = nums[i];
        }

        if (2 * i + 1 <= n) {
            nums[2 * i + 1] = nums[i] + nums[i + 1];
        }
    }

    return Math.max(...nums);
};
