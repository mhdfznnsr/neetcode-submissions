class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // [-4,-1,-1,0,1,2]
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        console.log(nums);
        var result = new Array();
        var hset = new Set();
        var i = 0;
        while(i <= nums.length - 2){
            var target = -1 * nums[i];
            var j = i + 1;
            var k = nums.length - 1;
            while(j < k){
                var sum = nums[j] + nums[k];
                if(sum === target) {
                    var temp = nums[i] + "," + nums[j] + "," + nums[k];
                    console.log(temp);
                    if(!hset.has(temp)) {
                        result.push([nums[i],nums[j],nums[k]]);
                        hset.add(temp);
                    }
                    j++;
                    k--;
                }
                else if(sum < target) j++;
                else k--;
            }
            i++;
            while(nums[i] === nums[i-1]){
                i++;
            }
        }
        return result;
    }
}
