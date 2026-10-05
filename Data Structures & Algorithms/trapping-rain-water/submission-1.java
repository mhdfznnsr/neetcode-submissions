class Solution {
    public int trap(int[] height) {
        int len = height.length;
        int[] prefix = new int[len];
        int[] suffix = new int[len];
        int waterStored = 0;
        prefix[0] = 0;
        suffix[len - 1] = 0;
        int i = 1;
        int j = len - 2;
        while(i < len && j >= 0){
            prefix[i] = Math.max(prefix[i-1],height[i-1]);  
            suffix[j] = Math.max(suffix[j+1],height[j+1]);
            i++;
            j--;

        }
        for(int k=0;k<len;k++){
            int temp = Math.min(prefix[k],suffix[k]) - height[k];
            if(temp >= 0){
                waterStored += temp;
            }
        }
        return waterStored;
    }
}
