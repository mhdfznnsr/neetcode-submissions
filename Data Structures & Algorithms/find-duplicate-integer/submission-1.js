class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        var slow = nums[0];
        var fast = nums[0];

        slow = nums[slow];
        fast = nums[nums[fast]];
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        slow = nums[0];
        while(slow !== fast){
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow;
    }
}
