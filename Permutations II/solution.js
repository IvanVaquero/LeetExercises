/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length === 1){
        return [nums];
    }
    let permutations = [];
    let processedNumbers = new Set();
    for(let i = 0; i<nums.length; i++){
        if(!processedNumbers.has(nums[i])){
            processedNumbers.add(nums[i]);
            let leftElements = nums.slice(0,i);
            let rightElements = nums.slice(i+1);
            let subsetPermutations = permuteUnique([...leftElements, ...rightElements]);
            for(let j=0; j<subsetPermutations.length; j++){
                permutations.push([nums[i], ...subsetPermutations[j]]);
            }
        }
    }
    return permutations;
};