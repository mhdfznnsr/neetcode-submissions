class Solution {
    public void getResult(List<String> ls,StringBuilder s,int open,int close,int n){
        if(open == n && close == n){
            ls.add(s.toString());
            return;
        }
        if(open < n){
            s.append("(");
            getResult(ls,s,open + 1,close,n);
            s.delete(s.length() - 1,s.length());

        }
        
        if(close < open){
            s.append(")");
            getResult(ls,s,open,close+1,n);
            s.delete(s.length() - 1,s.length());
        }
    }
    public List<String> generateParenthesis(int n) {
        StringBuilder s = new StringBuilder("(");
        List<String> ls = new ArrayList<>();

        getResult(ls,s,1,0,n);
        return ls;
    }
}
