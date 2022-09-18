/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length < 2) {
    return s.length;
  }
  var longest = 0;
  var used = {};
  var x = 0;
  for(y=0; y<s.length; y++){
    if(typeof used[s[y]] == 'undefined'){
      x +=1;
    } else {
      x = Math.min(y - used[s[y]], x + 1);
    }
    longest = Math.max(longest, x);
    used[s[y]] = y;
  }    
  return longest;
};