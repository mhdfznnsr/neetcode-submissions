class Solution {
    public int search(int[] nums, int target) {
        int len = nums.length;
        int res = 0;
        int l = 0;
        int r = nums.length - 1;
        int ind = 0;
        int minEle = nums[0];
        while(l <= r){
            if(nums[l] < nums[r]){
                if(nums[l] < minEle){
                    minEle = nums[l];
                    ind = l;
                }
                break;
            }
            int mid = (l + r) / 2;
            if(nums[mid] < minEle){
                minEle = nums[mid];
                ind = mid;
            }
            if(nums[mid] >= nums[l]){
                l = mid + 1;
            }
            else{
                r = mid - 1;
            }
        }
        if(ind == 0){
            res = Arrays.binarySearch(nums,0,len,target);
        }
        else if(target > nums[len - 1]){
            res = Arrays.binarySearch(nums,0,ind,target);
        }
        else{
            res = Arrays.binarySearch(nums,ind,len,target);
        }

        return res >= 0 ? res : -1;
    }
}
