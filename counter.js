var createCounter = function (init) {
    let counter = init
    return {
        increment: function () {
            counter += 1
            return counter
        },
        decrement: function () {
            counter -= 1
            return counter
        },
        reset: function () {
            counter = init
            return counter
        }
    }
};