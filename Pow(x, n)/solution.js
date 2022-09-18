/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */



var myPow = function(x, n) {
    if(n == 0){
        return 1;
    } else if (n == 1) {
        return x;
    } else if (n == 2) {
        return x*x;
    } else {
        let halfPow = myPow(x, parseInt(Math.abs(n/2)));
        let result = (n%2 == 0)
            ? halfPow * halfPow
            : halfPow * halfPow * x;
        if(n < 0){
            result = 1/result;
        }
        return result;
    }
};