class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        var res = new Array();
        var dq = new Deque();
        for(var i = 0;i<nums.length;i++){
            if(dq.size() > 0 && dq.front() <= i - k) dq.popFront();
            while(dq.size() > 0 && nums[dq.back()] <= nums[i]) dq.popBack();
            dq.pushBack(i);
            if(i >= k-1) res.push(nums[dq.front()]);
        }
        return res;
    }
}
