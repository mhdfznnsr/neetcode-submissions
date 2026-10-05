class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0) return 0;
        HashSet<Integer> hset = new HashSet<>();
        HashMap<Integer,Integer> hmap = new HashMap<>();
        int maxValue = 1;
        for(int num : nums){
            hset.add(num);
        }

        for(int num : nums){
            if(!hset.contains(num - 1)){
                hmap.put(num,1);
                int temp = num + 1;
                while(hset.contains(temp)){
                    hmap.put(num,hmap.get(num) + 1);
                    temp++;
                }
                maxValue = Math.max(hmap.get(num),maxValue);
            }
        }

        return maxValue;
    }
}
