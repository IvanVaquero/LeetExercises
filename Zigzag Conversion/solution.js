/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if (numRows == 1){
        return s;
    };
    
    var matrix = [];
    for (var i=0; i<numRows; i++){
        matrix.push([]);
    }
    
    var left = [...s];
    var i = 0;
    var j = 0;
    var diagonal = false;
    while (left.length > 0){
        matrix[i][j] = left.shift();
        if(diagonal){
            if(i==0){
                diagonal = false;
                i++;
            } else {
                i--;
                j++;
            }    
        } else {
            if(i < numRows - 1){
                i++;
            } else {
                diagonal = true;
                j++;
                i--;
            }   
        }
    }
    var solution = "";
    while (matrix.length > 0){
        solution += matrix.shift().join("");
    }
    return solution;
};