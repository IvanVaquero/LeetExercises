/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let positionHash = {};
    for(let i=0; i<wordsDict.length; i++){
        if(positionHash[wordsDict[i]]){
            positionHash[wordsDict[i]].push(i);
        } else {
            positionHash[wordsDict[i]] = [i];
        }
    }
    
    word1Positions = positionHash[word1];
    word2Positions = positionHash[word2];   

    let min = wordsDict.length;
    for(let i = 0; i< word1Positions.length; i++){
        for(let j=0; j < word2Positions.length; j++){
            let diff = Math.abs(word1Positions[i]-word2Positions[j])
            if(diff < min){
                min = diff;
            }
        }
    }
    
    return min;
};