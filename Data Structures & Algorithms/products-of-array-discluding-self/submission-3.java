class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] result = new int[nums.length];
        int[] prefixProduct = new int[nums.length];
        int[] postfixProduct = new int[nums.length];

        int prefix = 1;
        for(int i = 0;i < nums.length;i++){
            prefixProduct[i] = prefix;
            prefix = prefix * nums[i];
        }

        int postfix = 1;
        for(int i = nums.length - 1;i >= 0;i--){
            postfixProduct[i] = postfix;
            postfix = postfix * nums[i];
        }

        for(int i=0;i<nums.length;i++){
            result[i] = prefixProduct[i] * postfixProduct[i];
        }

        return result;

    }
}  
