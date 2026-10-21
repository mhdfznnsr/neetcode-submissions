class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        var hset = new Set(nums);
        var maxLength = 1;
        
        const iter = hset.values();
        for(const item of iter){
            if(!hset.has(item - 1)){
                var length = 1;
                var temp = item + 1;
                while(hset.has(temp)){
                    temp++;
                    length++;
                }
                if(length > maxLength) maxLength = length;
            }
        }
        return maxLength;
    }
}
