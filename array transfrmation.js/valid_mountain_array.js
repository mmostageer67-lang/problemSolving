/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let i=0
    let n=arr.length
    if (n<3)return false
 while (i < n - 1 && arr[i] < arr[i + 1]) {
        i++;
    }
     if (i === 0 || i === n - 1) {
        return false;
    }
  while (i < n - 1 && arr[i] > arr[i + 1]) {
        i++;
    }
    return i === n - 1;

};
