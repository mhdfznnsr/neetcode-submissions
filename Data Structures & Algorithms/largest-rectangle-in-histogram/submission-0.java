class Solution {
    public int largestRectangleArea(int[] heights) {
        int len = heights.length;
        int maxArea = 0;
        for(int i=0;i<len;i++){
            int start = i;
            while(start >= 0 && heights[start] >= heights[i]){
                start--;
            }
            start++;
            int end = i;
            while(end < len && heights[end] >= heights[i]){
                end++;
            }
            end--;
            maxArea = Math.max(maxArea,heights[i] * (end - start + 1));
        }
        return maxArea;
    }
}
