/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const n = nums.length;
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
        const targetIndex = ((i + nums[i]) % n + n) % n;
        result[i] = nums[targetIndex];
    }

    return result;
};
//==================================another solution=========================================
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    return  nums.map((n, i) => nums.at((n + i) % nums.length))
};