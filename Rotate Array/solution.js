/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length -1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length -1);
};

var reverse = function(nums, start, end){
    let tmp = null;
    while(start < end){
        tmp = nums[start];
        nums[start] = nums[end];
        nums[end] = tmp;
        start++;
        end--
    }
}