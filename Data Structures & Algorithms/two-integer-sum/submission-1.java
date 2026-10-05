class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> hmap = new HashMap<>();
        int[] result = new int[2]; 
        for(int i=0; i < nums.length; i++){
            int secondPair = target - nums[i];
            if(hmap.containsKey(secondPair)){
                    result[0] = hmap.get(secondPair);
                    result[1] = i;
            }
            hmap.put(nums[i],i);
        }

        return result;
    }
}
