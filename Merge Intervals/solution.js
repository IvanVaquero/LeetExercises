
let canMerge = function(i, i2){
    return (i[0] <= i2[0]) && (i[1] >= i2[0]);
}

let mergeIntervals = function(i, i2){
    return [
        Math.min(i[0], i2[0]), 
        Math.max(i[1], i2[1])
    ]
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    if(intervals.length <=1 ) {
        return intervals;
    }
    
    intervals = intervals.sort((a,b)=>{
        if(a[0] < b[0]){
            return -1;
        } else if (a[0] > b[0]){
            return 1;
        } else {
            return 0
        }
    });
    
    let result = [];
    let latestInterval = intervals[0];
    
    for(let i=1; i<intervals.length; i++){
        if(canMerge(latestInterval, intervals[i])){
            latestInterval = mergeIntervals(latestInterval, intervals[i]);
        } else {
            result.push(latestInterval);
            latestInterval = intervals[i];
        }
    }
    result.push(latestInterval);
    
    return result;
}; 