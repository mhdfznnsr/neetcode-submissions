class Solution {
    /*
    using two pointers to solve this problem
    */
    public int trap(int[] height) {
        int len = height.length;
        int waterStored = 0;
        int l = 0;
        int r = len - 1;

        int leftMax = height[l];
        int rightMax = height[r];
        
        while(l < r){
            /*
            first we stand on the boundaries and check which is smaller among two.
            if left is smaller than right then it means the next place can be filled with water with left height

            increment the index l and get the max between the leftmax and height[l].
            this will eleminate the possibility of negative values since if
            current index has greater value than left max then we get zero as water stored.

            same goes for right index and it continues.
            */
            if(leftMax < rightMax){
                l++;
                leftMax = Math.max(leftMax,height[l]);
                waterStored += leftMax - height[l];
            }
            else{
                r--;
                rightMax = Math.max(rightMax,height[r]);
                waterStored += rightMax - height[r];
            }
        }
        return waterStored;
    }
}
