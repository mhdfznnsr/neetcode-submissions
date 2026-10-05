class Solution {
    /*
    brute force where for every index, find out to its left upto where it
    can be extented and get that index.
    same go for its right direction and find the index upto where it can be
    extended.

    once left and right are found, use heights[i] * (end - start + 1) to get
    the height and update the maxArea variable
    */
    public int largestRectangleArea(int[] heights) {
        int len = heights.length;
        int maxArea = 0;
        
        Stack<int[]> stack = new Stack<>();
        for(int i=0;i<len;i++){
            if(stack.isEmpty() || heights[i] >= stack.peek()[1]){
                stack.push(new int[]{i,heights[i]});
                continue;
            }
            int startInd = stack.peek()[0];
            while(!stack.isEmpty() && heights[i] < stack.peek()[1]){
                int[] temp = stack.pop();
                int ind = temp[0];
                int height = temp[1];
                maxArea = Math.max(maxArea,(i - ind) * height);
                startInd = ind;
            }
            stack.push(new int[]{startInd,heights[i]});
        }

        while(!stack.isEmpty()){
            int[] temp = stack.pop();
            int ind = temp[0];
            int height = temp[1];
            maxArea = Math.max(maxArea,(len - ind) * height);
        }
        return maxArea;
    }
}
