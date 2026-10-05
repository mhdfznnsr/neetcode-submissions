class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0) return 0;
        HashSet<Integer> hset = new HashSet<>();
        int maxValue = 1;
        for(int num : nums){
            hset.add(num);
        }

        for(int num : hset){
            if(!hset.contains(num - 1)){
                int length = 1;
                int temp = num + 1;
                while(hset.contains(temp)){
                    length++;
                    temp++;
                }
                maxValue = Math.max(length,maxValue);
            }
        }

        return maxValue;
    }
}
