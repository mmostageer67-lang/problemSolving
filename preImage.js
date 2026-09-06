var preimageSizeFZF = function (k) {

    function zeros(x) {
        let count = 0;

        while (x > 0) {
            x = Math.floor(x / 5);
            count += x;
        }

        return count;
    }

    let left = 0;
    let right = 5 * (k + 1);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (zeros(mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    let first = left;

    left = 0;
    right = 5 * (k + 1);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (zeros(mid) > k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    let last = left;

    return zeros(first) === k ? last - first : 0;
};