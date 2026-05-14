
var createCounter = function (n) {
    let value = n
    return function () {
        return value++
    };
};