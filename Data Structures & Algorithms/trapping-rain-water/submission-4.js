class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        var result = 0;
        var l = 0;
        var r = height.length - 1;
        var leftMax = height[l];
        var rightMax = height[r];
        while(l < r){
            if(leftMax < rightMax){
                l++;
                leftMax = Math.max(leftMax,height[l]);
                result += leftMax - height[l];
            }
            else{
                r--;
                rightMax = Math.max(rightMax,height[r]);
                result += rightMax - height[r];
            }
        }
        return result;
    }
}
