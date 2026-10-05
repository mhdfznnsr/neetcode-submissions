class Solution {
    public int calculateExpression(Stack<Integer> stack, String operand){
        int rightVal = stack.pop();
        int leftVal = stack.pop();
        int result = 0;
        switch(operand){
            case "+":
                result = leftVal + rightVal;
                break;
            case "-":
                result = leftVal - rightVal;
                break;
            case "*":
                result = leftVal * rightVal;
                break;
            case "/":
                result = leftVal / rightVal;
                break;
        }
        return result;
    }
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        HashSet<String> hset = new HashSet<>();
        hset.add("+");
        hset.add("-");
        hset.add("*");
        hset.add("/");

        int result = Integer.parseInt(tokens[0]);
        for(String str : tokens){
            if(hset.contains(str)){
                result = calculateExpression(stack,str);
                stack.push(result);
            }
            else{
                stack.push(Integer.parseInt(str));
            }
            
        }
        return result;
    }
}
