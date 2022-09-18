/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    
    return function(n) {
        let celebrity = false;
        for(let i = 0; i< n; i++){
            for(let j = 0; j < n; j++){
                if(j != i){
                    if(knows(i,j)){
                        celebrity = false;
                        break;
                    } else {
                        celebrity = true;
                    }
                }
            }
            if(celebrity){
                for(let j=0; j<n; j++){
                    if(j != i){
                        if(!knows(j, i)){
                            celebrity = false;
                            break;
                        }       
                    }
                }
                if(celebrity){
                    return i;   
                }
            }
        }
        return -1;
    };
};

/*
function solution(knows) {
    function isCelebrity(i, n) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            if (knows(i, j) || !knows(j, i)) {
                return false;
            }
        }
        return true;
    }

    return function findCelebrity(n) {
        let celebrityCandidate = 0;
        for (let i = 0; i < n; i++) {
            if (knows(celebrityCandidate, i)) {
                celebrityCandidate = i;
            }
        }
        if (isCelebrity(celebrityCandidate, n)) {
            return celebrityCandidate;
        }
        return -1;
    }
}
*/