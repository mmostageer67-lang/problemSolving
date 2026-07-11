var transformArray = function (nums) {
    const result = [];

    for (let num of nums) {
        if (num % 2 === 0) {
            result.push(0);
        } else {
            result.push(1);
        }
    }

    return result.sort((a, b) => a - b);
};