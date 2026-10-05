class Solution {
    public int findMin(int[] nums) {
        int l = 0;
        int r = nums.length - 1;
        int minElement = nums[0];
        while(l <= r){
            if(nums[l] < nums[r]){
                minElement = Math.min(minElement,nums[l]);
                break;
            }
            int mid = (l + r) / 2;
            minElement = Math.min(minElement,nums[mid]);

            if(nums[mid] >= nums[l]){
                l = mid + 1;
            }
            else{
                r = mid - 1;
            }
        }
        return minElement;
    }
}
