/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1, nums2) {
    let h1 = {};
    let h2 = {};
    let result = [];
    
    fillHash(nums1, h1);
    fillHash(nums2, h2);
    
    Object.keys(h1).forEach(function(k){
        if(h2[k]){
            let reps = Math.min(h1[k], h2[k]);
            for(let i=0; i<reps; i++){
                result.push(k);
            }
        }
    })
    
    return result;
};

let fillHash = function (values, hash){
    for(let i=0; i<values.length; i++){
        if(hash[values[i]]){
            hash[values[i]]++;
        } else {
            hash[values[i]] = 1;
        }
    }    
}