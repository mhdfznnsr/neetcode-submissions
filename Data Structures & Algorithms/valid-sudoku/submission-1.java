class Solution {
    public boolean isValidSudoku(char[][] board) {
        for(int i=0;i<9;i++){
            HashSet<Character> set = new HashSet<>();
            for(int j=0;j<9;j++){
                char currentValue = board[i][j];
                if(currentValue == '.') continue;
                if(set.contains(currentValue)) return false;
                set.add(currentValue);
            }
        }

        for(int i=0;i<9;i++){
            HashSet<Character> set = new HashSet<>();
            for(int j=0;j<9;j++){
                char currentValue = board[j][i];
                if(currentValue == '.') continue;
                if(set.contains(currentValue)) return false;
                set.add(currentValue);
            }
        }

        for(int square = 0;square < 9;square++){
            HashSet<Character> set = new HashSet<>();
            for(int i = 0;i < 3;i++){
                for(int j = 0;j < 3;j++){
                    int row = (square / 3) * 3 + i;
                    int col = (square % 3) * 3 + j;
                    char currentValue = board[row][col];
                    if(currentValue == '.') continue;
                    if(set.contains(currentValue)) return false;
                    set.add(currentValue);
                }
            }
        }

        return true;
    }
}
