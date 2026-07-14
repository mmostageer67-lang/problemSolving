/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
   let increas =true
   let decreas=true
    for(let i=0;i<nums.length;i++)
    {
        if (nums[i]>nums[i+1])
        { 
         increas=false
         }

         if(nums[i]<nums[i+1])
        {
          decreas =false
        }
        

  
    }
    return increas || decreas  
};