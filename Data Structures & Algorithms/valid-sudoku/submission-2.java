class Solution {
    public boolean isValidSudoku(char[][] board) {
        HashMap<Integer,HashSet<Character>> rows = new HashMap<>();
        HashMap<Integer,HashSet<Character>> cols = new HashMap<>();
        HashMap<String,HashSet<Character>> squares = new HashMap<>();

        for(int i=0;i<9;i++){
            for(int j=0;j<9;j++){
                char cellValue = board[i][j];
                if(cellValue == '.') continue;
                
                String temp = (i / 3) + "," + (j / 3);
                
                if (rows.computeIfAbsent(i, k -> new HashSet<>()).contains(cellValue) ||
                    cols.computeIfAbsent(j, k -> new HashSet<>()).contains(cellValue) ||
                    squares.computeIfAbsent(temp, k -> new HashSet<>()).contains(cellValue)) {
                    return false;
                }
                rows.get(i).add(cellValue);
                cols.get(j).add(cellValue);
                squares.get(temp).add(cellValue);
            }   
        }
        return true;
    }
}
