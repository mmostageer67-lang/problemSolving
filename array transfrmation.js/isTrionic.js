/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    const n = nums.length;
    let i = 0;

    while (i + 1 < n && nums[i] < nums[i + 1]) {
        i++;
    }

    if (i === 0) return false;

    const peak = i;

    while (i + 1 < n && nums[i] > nums[i + 1]) {
        i++;
    }

    if (i === peak) return false;

    const valley = i;

    while (i + 1 < n && nums[i] < nums[i + 1]) {
        i++;
    }

    if (i === valley) return false;

    return i === n - 1;
};
