class Solution {
    public boolean isValidPair(char leftPair, char rightPair){
        if((leftPair == '(' && rightPair == ')') ||
            (leftPair == '{' && rightPair == '}') ||
            (leftPair == '[' && rightPair == ']')
            ) return true;
        else return false;
    }
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for(char ch : s.toCharArray()){
            if(!stack.isEmpty() && isValidPair(stack.peek(),ch)){
                stack.pop();
            }
            else{
                stack.push(ch);
            }
        }

        if(!stack.isEmpty()) return false;
        return true;
    }
}
