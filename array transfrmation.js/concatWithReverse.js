/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    const ans = [];
    let n = nums.length;

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[n - i - 1];
    }
    return ans;
};
