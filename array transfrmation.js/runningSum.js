var runningSum = function(nums) {
    let sum = 0
    let r = []

    for (let i = 0; i < nums.length; i++) {
          sum += nums[i]
        r.push(sum)
    }

    return r
}
