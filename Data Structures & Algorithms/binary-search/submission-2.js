class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var l = 0;
        var r = nums.length;
        while(l <= r){
            var mid = Math.floor((l + r) / 2);
            if(nums[mid] === target) return mid;
            else if(nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }
}
