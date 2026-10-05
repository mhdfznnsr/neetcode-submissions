class MinStack {
    Stack<Integer> stack = null;
    Stack<Integer> minStack = null;
    int minValue = Integer.MAX_VALUE;
    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
    public void push(int val) {
        int min = val;
        if(!minStack.isEmpty()){
            min = Math.min(min,minStack.peek());
        }
        stack.push(val);
        minStack.push(min);
    }
    
    public void pop() {
        stack.pop();
        minStack.pop();
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}
