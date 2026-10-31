class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        var l = 0;
        var r = nums.length - 1;
        var minVal = 20000;
        while(l <= r){
            var mid = Math.floor((l + r) / 2);
            minVal = Math.min(minVal,nums[mid]);
            if(nums[l] <= nums[mid] && nums[mid] >= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
        return minVal;
    }
}
