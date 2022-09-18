/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    var join = [];
    var process = true;
    var a = null;
    var b = null;
    
    if (nums1.length == 0){
      join = nums2;
      process = false;  
    } else if (nums2.length == 0){
      join = nums1;
      process = false;
    } else {  
      a = nums1.shift();
      b = nums2.shift();
    }
    
    while(process){
        if(a<b){
            join.push(a);
            if(nums1.length > 0){
                a = nums1.shift();
            } else {
                join.push(b, ...nums2);
                break;
            }
        } else {
            join.push(b);
            if(nums2.length > 0){
                b = nums2.shift();
            } else {
                join.push(a, ...nums1);
                break;
            }
        }
    }
    if(join.length == 1){
        return join[0];
    } else if (join.length == 2){
        return (join[0]+join[1])/2;
    } else {
        if(join.length % 2 == 0){
            return (join[Math.round(join.length/2)] + join[Math.round(join.length/2)-1])/2;
        } else {
            return join[Math.round(join.length/2)-1];
        }
    }
    
};