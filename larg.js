var largestNumber = function(nums) {
    if (nums.every(x => x === 0)) {
    return "0";
}
    nums = nums.map(String);

    nums.sort((a, b) => {
        if (a + b > b + a) {
            return -1;
        } else {
            return 1;
        }
    });

    return nums.join("");
};