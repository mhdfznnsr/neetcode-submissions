class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var hm = new Map();
        for(var i=0;i<nums.length;i++){
            var rem = target - nums[i];
            if(hm.has(rem)){
                return [hm.get(rem),i]
            }
            hm.set(nums[i],i);
        }
    }
}
