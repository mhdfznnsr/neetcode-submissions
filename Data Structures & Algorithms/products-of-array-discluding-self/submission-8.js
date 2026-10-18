class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */ 
    //[1,2,4,6]
    productExceptSelf(nums) {
        var result = new Array(nums.length);
        var leftProduct = 1;
        var rightProduct = 1;
        var i = 0;
        var j = nums.length - 1;
        while(i < nums.length){
            result[i] = leftProduct; //1

            leftProduct = leftProduct * nums[i];

            i++;
        }

        while(j >= 0){
            result[j] = result[j] * rightProduct; //1

            rightProduct = rightProduct * nums[j];

            j--;
            // console.log(result.toString());
        }
        return result;

    }
}
