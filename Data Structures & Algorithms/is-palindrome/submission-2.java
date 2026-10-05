class Solution {
    public boolean isValidRange(char c){
        if(c == ' ') return false;
        int cAscii = (int)c;
        if((cAscii >= 48 && cAscii <= 57) || 
            (cAscii >= 65 && cAscii <= 122)) return true;
        return false;
    }
    public boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;
        s = s.toLowerCase();
        while(i < j && i < s.length() && j > i && j >= 0){
            char c1 = s.charAt(i);
            char c2 = s.charAt(j);
            if(!isValidRange(c1)){
                i++;
                continue;
            }
            if(!isValidRange(c2)){
                j--;
                continue;
            }
            if(c1 != c2) return false;
            i++;
            j--;
        }
        return true;
    }
}
