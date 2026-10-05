class Solution {
    public int[] productExceptSelf(int[] nums) {
        int product = 1;
        int zeroCount = 0;
        int[] result = new int[nums.length];
        for(int num : nums){
            if(num == 0){
                zeroCount++;
                continue;
            }
            product = product * num;
        }

        if(zeroCount > 1 || zeroCount == nums.length){
            for(int i=0;i<nums.length;i++){
                result[i] = 0;
            }
            return result;
        }

        if(zeroCount == 1){
            for(int i=0;i<nums.length;i++){
                if(nums[i] == 0){
                    result[i] = product;
                    continue;
                }
                result[i] = 0;
            }
            return result;
        }

        for(int i=0;i<nums.length;i++){
            result[i] = product / nums[i];
        }
        return result;

    }
}  
