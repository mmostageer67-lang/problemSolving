var relativeSortArray = function (arr1, arr2) {
    const freq = new Map();

    for (const num of arr1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const result = [];

    for (const num of arr2) {
        while (freq.get(num) > 0) {
            result.push(num);
            freq.set(num, freq.get(num) - 1);
        }
        freq.delete(num);
    }

    const remaining = [];

    for (const [num, count] of freq) {
        for (let i = 0; i < count; i++) {
            remaining.push(num);
        }
    }

    remaining.sort((a, b) => a - b);

    return result.concat(remaining);
};