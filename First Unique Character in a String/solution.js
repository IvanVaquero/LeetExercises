/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let chars = {};
    
    for(let i=0; i<s.length; i++){
        if(chars[s[i]]){
            chars[s[i]]++;
        } else {
            chars[s[i]] = 1;
        }
    }
    
    for(let i=0; i<s.length; i++){
        if(chars[s[i]] === 1){
            return i;
        }
    }
    
    return -1;
};