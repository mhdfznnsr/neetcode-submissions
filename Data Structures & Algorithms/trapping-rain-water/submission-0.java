class Solution {
    public int trap(int[] height) {
        int waterStored = 0;
        for(int i = 0;i<height.length;i++){
            int leftMax = 0;
            int rightMax = 0;
            for(int j = 0;j<i;j++){
                leftMax = Math.max(height[j],leftMax);
            }

            for(int k=i+1;k<height.length;k++){
                rightMax = Math.max(height[k],rightMax);
            }
            int temp = Math.min(leftMax,rightMax) - height[i];
            if(temp >= 0){
                waterStored += temp;
            }
            
        }
        return waterStored;
    }
}
