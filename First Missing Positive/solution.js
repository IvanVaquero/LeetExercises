/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var nums2 = [];
    while(nums.length > 0){
        var c = nums.shift();
        if (c > 0){
            nums2[c-1] = c;
        }   
    }
    var result = 1;
    while(nums2.length > 0){
        var c = nums2.shift();
        if (result == c){
            result++;
        } else {
            return result;
        }
    }
    return result;
};