var canFormArray = function(arr, pieces) {
    for (let i = 0; i < arr.length; ) {
        let found = false;

        for (let j = 0; j < pieces.length; j++) {

            if (pieces[j][0] === arr[i]) {
                found = true;

                for (let k = 0; k < pieces[j].length; k++) {

                    if (arr[i + k] !== pieces[j][k]) {
                        return false;
                    }
                }

                i += pieces[j].length;
                break;
            }
        }

        if (!found) {
            return false;
        }
    }

    return true;
};
