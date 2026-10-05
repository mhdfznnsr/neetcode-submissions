class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var hmap = new Map();
        for(var i=0;i<nums.length;i++){
            if(!hmap.get(nums[i])){
                hmap.set(nums[i],1);
                continue;
            }
            return true;
        }
        return false;

    }
}
