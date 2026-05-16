var expect = function(val) {
    return {
        toBe:(n)=> {
            if (val === n) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe:(n)=> {
            if (val !== n) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
}