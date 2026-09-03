/*
                              minimum function to calles to make he target of array
                              =====================================================
    what's mean? we ake smallest num berfrom arr and return it
    =======================================================================================
    we have nums is an intger array : he is the originalarray
    =======================================================================================
    arr is array of inger the same length he is set all values to 0 initially
    =======================================================================================
func modify(arr : the array wechange it, op : which the operation is, idx : the index of the array we want to change it) {
    // add by 1 index idx
    if (op == 0) {
        arr[idx] = arr[idx] + 1: if we have arr = 0  we add +1 to 0 become 1 and  
    }

    // multiply by 2 all elements
    if (op == 1) {
        for (i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * 2
        }we multyply all elements in the array by 2
    }
}
    the goal arr become lile nums   
*/
var minOperations = function(nums) {
    let operations = 0;

    while (nums.some(x => x > 0)) {

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] % 2 === 1) {
                nums[i]--;
                operations++;
            }
        }

       
        if (nums.some(x => x > 0)) {
            for (let i = 0; i < nums.length; i++) {
                nums[i] = nums[i] / 2;
            }

            operations++;
        }
    }

    return operations;
};