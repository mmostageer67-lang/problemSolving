/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freq = {};

    for (let i = 0; i < nums.length; i++) {

        if (freq[nums[i]] !== undefined) {
            continue;
        }

        let count = 1;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }

        freq[nums[i]] = count;
    }

    nums.sort((a, b) => {
        if (freq[a] !== freq[b]) {
            return freq[a] - freq[b];
        }

        return b - a;
    });

    return nums;
};
