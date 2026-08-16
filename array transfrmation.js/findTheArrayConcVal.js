var findTheArrayConcVal = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let answer = 0;

    while (left < right) {
        let concatenated = Number(
            String(nums[left]) + String(nums[right])
        );

        answer += concatenated;

        left++;
        right--;
    }

    if (left === right) {
        answer += nums[left];
    }

    return answer;
};
