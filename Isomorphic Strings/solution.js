/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let addToHash = function (hash, key, index){
    if(hash[key]){
        hash[key].push(index);
    } else {
        hash[key] = [index];
    }
    return hash;
}

var isIsomorphic = function(s, t) {
    let sHash = {};
    let tHash = {};
    
    if(s.length != t.length) {
        return false;
    }
    
    for(let i=0; i<s.length; i++){
        sHash = addToHash(sHash, s[i], i); 
        tHash = addToHash(tHash, t[i], i);
    }
    
    for(let i=0; i<s.length; i++){
        if(sHash[s[i]].join(',') != tHash[t[i]].join(',')){
            return false;
        }
    }
        
    return true;
};