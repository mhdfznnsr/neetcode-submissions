class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        var preMax = new Array(height.length);
        var suffMax = new Array(height.length);
        var result = 0;
        preMax[0] = 0;
        for(var i = 1;i<height.length;i++){
            preMax[i] = Math.max(height[i-1],preMax[i-1]);
        }
        suffMax[height.length - 1] = 0;
        for(var j = height.length - 2;j >= 0;j--){
            suffMax[j] = Math.max(height[j+1],suffMax[j+1]);
        }
        for(var i = 0;i<height.length;i++){
            var area = Math.min(preMax[i],suffMax[i]) - height[i];
            if(area >= 0) result += area; 
        }
        return result;
    }
}
