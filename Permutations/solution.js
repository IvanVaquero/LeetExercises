/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 1){
        return [nums];
    }
    let permutations = [];
    for(let i = 0; i<nums.length; i++){
        let leftElements = nums.slice(0,i);
        let rightElements = nums.slice(i+1);
        let subsetPermutations = permute([...leftElements, ...rightElements]);
        for(let j=0; j<subsetPermutations.length; j++){
            permutations.push([nums[i], ...subsetPermutations[j]]);
        }
    }
    return permutations;
};