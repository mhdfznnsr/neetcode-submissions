class Solution {
    public int maxArea(int[] heights) {
        int len = heights.length;
        int maxArea = 0;
        for(int i=0;i<len - 1;i++){
            for(int j=i+1;j<len;j++){
                int minHeight = Math.min(heights[i],heights[j]);
                int totalArea = minHeight * (j - i);
                maxArea = Math.max(maxArea,totalArea);
            }
        }
        return maxArea;
    }
}
