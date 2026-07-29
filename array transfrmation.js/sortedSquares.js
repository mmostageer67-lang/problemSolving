/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const r = [];
    for (let i = 0; i < nums.length; i++) {
        r.push(nums[i] * nums[i]);
    }
    r.sort((a, b) => a - b);
    return r;
};
