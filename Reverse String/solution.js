/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let head = 0;
    let tail = s.length - 1;
    let tmp = null;
    while(head < tail){
        tmp = s[tail];
        s[tail] = s[head];
        s[head] = tmp;
        head++;
        tail--;
    }
};