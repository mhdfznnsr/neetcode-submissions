class MinStack {
    Stack<Integer> stack = null;
    int minValue = Integer.MAX_VALUE;
    public MinStack() {
        stack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);
        minValue = Math.min(minValue,val);
    }
    
    public void pop() {
        stack.pop();
        minValue = Integer.MAX_VALUE;
        for(int val : stack){
            minValue = Math.min(minValue,val);
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minValue;
    }
}
