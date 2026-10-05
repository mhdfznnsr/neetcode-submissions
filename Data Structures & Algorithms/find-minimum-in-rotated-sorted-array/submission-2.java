class Solution {
    public int findMin(int[] nums) {
        int l = 0;
        int r = nums.length - 1;
        int minElement = nums[0];
        while(l <= r){
            int mid = (l + r) / 2;
            if(l == r){
                minElement = Math.min(minElement,nums[mid]);
                break;
            }
            else if(nums[r] < nums[l]){
                if(nums[r] < nums[mid]){
                    l = mid + 1;
                }
                else{
                    minElement = Math.min(minElement,nums[mid]);
                    r = mid - 1;
                }
            }
            else if(nums[r] > nums[l] && nums[r] > nums[mid]){
                r = mid - 1;
                minElement = Math.min(minElement,nums[mid]);
            }
        }
        return minElement;
    }
}
