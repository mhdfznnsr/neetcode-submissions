class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums = nums.sort();
        var prev = nums[0];
        for(var i=1;i<nums.length;i++){
            if(nums[i] == prev){
                return true;
            }
            prev = nums[i];
        }
        return false;
    }
}
