/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    let isValidRow = function(rowNum){
        let values = {};
        for(let i=0; i<9; i++){
            let value = board[rowNum][i];
            if(value !== '.' && values[value]){
                return false;
            }
            values[value] = 1;
        }
        return true;
    }

    let isValidColumn = function(columnNum){
        let values = {};
        for(let i=0; i<9; i++){
            let value = board[i][columnNum];
            if(value !== '.' && values[value]){
                return false;
            }
            values[value] = 1;
        }
        return true;
    }

    let isValidSquare = function(squareNum){

        let squares = [
            [0,0], [0,3], [0,6], 
            [3,0], [3,3], [3,6], 
            [6,0], [6,3], [6,6]
        ];

        let initialRow = squares[squareNum][0];
        let initialColumn = squares[squareNum][1];

        let values = {};
        for(let i=initialRow; i<initialRow+3 ; i++){
            for(let j=initialColumn; j<initialColumn+3 ; j++){
                let value = board[i][j];
                if(value !== '.' && values[value]){
                  return false;
                }
                values[value] = 1;
            }
        }
        return true;
    }

    for(let i=0; i<9; i++){
        if(
            !isValidRow(i) ||
            !isValidColumn(i) ||
            !isValidSquare(i)
        ){
            return false;
        }
    }

    return true;
};