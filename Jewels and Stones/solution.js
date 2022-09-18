/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {  
  var jewels_dict = {};
  var c = 0;
  if(J && typeof(J) == "string" && J.length>0){
      for(i=0; i < J.length; i++){
        jewels_dict[J[i]] = true
      }
  }
  if(S && typeof(S) == "string" && S.length>0){   
      for(i=0; i< S.length; i++){
        if(jewels_dict[S[i]]){
            c++;
        }
      }
  }
  return c;
};