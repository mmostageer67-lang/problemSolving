/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    const count = new Map();

    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);

        if (count.get(num) > 2) {
            return false;
        }
    }

    return true;
};
