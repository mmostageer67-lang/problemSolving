/*
                                                         <rotating function>
1.what does meaning? rotate it's take elment o another place without changing the order of the elements. It is used to move elements in a circular manner. For example,
 if you have an array [1, 2, 3, 4] and you rotate it by 1 position to the right, it becomes [4, 1, 2, 3].
2. nums is an intger array  his length n
3.arr is rotaing array of nums by k position to the right
4.we defind rotate function by f on nums
5.f(k)=index*arr(k)[i]*....
6. the final thing return maximum value of f(k) for all k from 0 to n-1
=====================================================================================================================================
=====================================================================================================================================
                                                                  <planing>
F the process multiply or do any operation it's show the final result after it we get the maximum value of f(k) for all k from 0 to n-1
arr the array of rotating nums
nums orginal array 
k possition to rotate the array

*/
var maxRotateFunction = function(nums) {
    let n = nums.length;

    let total = 0;
    let F = 0;

    // Calculate total sum and F(0)
    for (let i = 0; i < n; i++) {
        total += nums[i];
        F += i * nums[i];
    }

    let max = F;

    // Calculate F(1), F(2), ..., F(n - 1)
    for (let k = 1; k < n; k++) {
        F = F + total - n * nums[n - k];

        max = Math.max(max, F);
    }

    return max;
};