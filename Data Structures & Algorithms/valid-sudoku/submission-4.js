class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        var rowSet = new Map();
        var colSet = new Map();
        var squareSet = new Map();

        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
                var value = board[i][j];
                if(value === '.') continue;
                var temp = Math.floor(i/3) + "," + Math.floor(j/3);

                

                if(rowSet.has(i) && rowSet.get(i).has(value)) return false;
                if(colSet.has(j) && colSet.get(j).has(value)) return false;
                if(squareSet.has(temp) && squareSet.get(temp).has(value)) return false;

                rowSet.has(i) ? rowSet.get(i).add(value) : rowSet.set(i,new Set(value));
                colSet.has(j) ? colSet.get(j).add(value) : colSet.set(j,new Set(value));
                squareSet.has(temp) ? squareSet.get(temp).add(value) : 
                        squareSet.set(temp,new Set(value));

            }
        }
        return true;
    }
}
