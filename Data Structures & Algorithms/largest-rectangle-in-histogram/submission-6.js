class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        var stack = new Array();
        var maxArea = 0;
        for(var i=0;i<heights.length;i++){
            while(stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]){
                // console.log(maxArea);
                var curr = stack.pop();
                var nse = i;
                var pse = stack.length > 0 ? stack[stack.length-1] : -1;
                maxArea = Math.max(maxArea,heights[curr] * (nse - pse - 1));
            }
            stack.push(i);
            // console.log(stack);
        }
        while(stack.length > 0){
            var curr = stack.pop(); 
            var nse = heights.length;
            var pse = stack.length > 0 ? stack[stack.length - 1] : -1;
            maxArea = Math.max(maxArea,heights[curr] * (nse - pse - 1));
        }
        return maxArea;
    }

    
}
