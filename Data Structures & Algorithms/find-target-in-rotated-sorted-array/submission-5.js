class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchTarget(nums,l,r,target){
        while(l<=r){
            var mid = Math.floor(l + (r-l)/2);
            if(nums[mid] === target){
                return mid;
            }
            if(target < nums[mid]) r = mid-1;
            else l = mid+1;
        }
        return -1;
    }
    search(nums, target) {
        var l = 0;
        var r = nums.length - 1;
        var minVal = nums[0];
        var minInd = -1;
        while(l <= r){
            if(nums[l] < nums[r]){
                if(nums[l] <= minVal){
                    minInd = l;
                }
                break;
            }
            var mid = Math.floor(l + (r - l) / 2);
            if(nums[mid] <= minVal){
                minVal = nums[mid];
                minInd = mid;
            }
            if(nums[l] <= nums[mid] && nums[mid] > nums[r]) l = mid + 1;
            else r = mid - 1;
        }
        console.log(minInd);
        if(nums[minInd] <= target && target <= nums[nums.length-1]) return this.searchTarget(nums,minInd,nums.length-1,target);
        else return this.searchTarget(nums,0,minInd-1,target);
    }
}
