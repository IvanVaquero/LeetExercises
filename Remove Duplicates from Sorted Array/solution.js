/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 0){
        return 0;
    }
    let lastUnique = 0;
    let currentNumber = nums[0];
    let unique = 1;
    for(let i=1; i < nums.length; i++){
        if(nums[i] != currentNumber){
            if(nums[i] > currentNumber){
                unique++;
                lastUnique++;
                currentNumber = nums[i];
                nums[lastUnique] = currentNumber;
            }
        }
    }
    return unique;
};