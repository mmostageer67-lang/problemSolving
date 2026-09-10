var isPalindrome = function(x) {
    let s = x.toString();

    for (let i = 0; i < s.length / 2; i++) {
        let k = s.length - 1 - i;

        if (s[i] !== s[k]) {
            return false;
        }
    }

    return true;
};