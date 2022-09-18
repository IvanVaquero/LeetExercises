/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return [...(x+"")].reverse().join("") == x;
};