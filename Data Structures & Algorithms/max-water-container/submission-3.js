class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var maxArea = 0;
        var i = 0;
        var j = heights.length - 1;
        while(i < j){
            var length = j - i;
            var height = Math.min(heights[i],heights[j]);
            var area = length * height;
            maxArea = Math.max(area,maxArea);
            if(heights[i] < heights[j]) i++;
            else j--;
        }
        return maxArea;
    }
}
