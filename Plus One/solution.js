/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i = digits.length-1; i>=0; i--){
        if(carry > 0){
            if(digits[i] == 9){
                digits[i] = 0;
            } else {
                digits[i]++;
                carry = 0;
            }
        }
    }
    if(carry > 0){
        digits.unshift(1);
    }
    return digits;
};