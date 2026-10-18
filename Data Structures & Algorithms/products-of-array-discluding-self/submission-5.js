class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var product = 1;
        var result = new Array(nums.length).fill(0);
        var zeroCount = 0;
        var zeroInd = -1;
        nums.forEach((num,ind) => {
            if(num !== 0) product = product * num;
            else {
                zeroCount++;
                zeroInd = ind;
            }
        });

        if(zeroCount > 1) return result;
        if(zeroCount == 1){
            result[zeroInd] = product;
            return result;
        }
        for(var i=0;i<nums.length;i++){
            result[i] = product / nums[i];
        }
        return result;

    }
}
