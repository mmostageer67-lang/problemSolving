/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let check=[]
    for(let i=0;i<nums.length;i++)

{  
     if (check.includes(nums[i])) {
            continue;
        }
    let count =1
for(let k=i+1;k<nums.length;k++)
{

 
    if(nums[i]===nums[k])
    {
                    check.push(nums[i]);

count++
    }
   

}
 if(count%2===0)
 {
     continue
 }else 
 {return false}
}
    return true;

};
