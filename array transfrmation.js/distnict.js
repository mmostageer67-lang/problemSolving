/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let count=0
   nums.sort((a, b) => b - a);
for(let i=0;i<nums.length;i++)
 {

if(nums[i]===nums[i+1])
{
    continue
}
count++
if (count ===3)
{
    return nums [i]
}

}

 if(nums.length<=2||nums.length>=1)
{ return Math.max (...nums)}



 }
