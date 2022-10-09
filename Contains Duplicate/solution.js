/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let values = {};
    for(let i=0; i<nums.length; i++){
        if(values[nums[i]]){
            return true;
        }
        values[nums[i]] = true;
    }
    return false;
};