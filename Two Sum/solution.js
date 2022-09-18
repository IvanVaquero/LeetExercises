/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length -1; i++){
        for(let j=i+1; j< nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};

/*
var twoSum = function(nums, target) {
    let numsHash = {};
    for(let i=0; i<nums.length; i++){
        if( numsHash[nums[i]]){
            numsHash[nums[i]].push(i);
        } else {
            numsHash[nums[i]]= [i];
        }
    }
    
    console.log(numsHash);
    
    for(let i=0; i<nums.length; i++){
        let complementNumbers = numsHash[target - nums[i]];
        if(complementNumbers){
            for(let j=0; j<complementNumbers.length; j++){
                if(complementNumbers[j] != i) {
                    return [i, complementNumbers[j]];
                }
            }
        }
    }
};
*/