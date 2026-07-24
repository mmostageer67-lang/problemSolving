/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {

    const count = {};
    const first = {};
    const last = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (first[num] === undefined) {
            first[num] = i;
        }

        last[num] = i;
        count[num] = (count[num] || 0) + 1;
    }

    let degree = 0;

    for (const num in count) {
        degree = Math.max(degree, count[num]);
    }

    let answer = nums.length;

    for (const num in count) {
        if (count[num] === degree) {
            answer = Math.min(answer, last[num] - first[num] + 1);
        }
    }

    return answer;
};
