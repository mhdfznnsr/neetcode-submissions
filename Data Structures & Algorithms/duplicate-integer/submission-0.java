class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> hset = new HashSet<>();
        for(int item : nums){
            if(hset.contains(item)){
                return true;
            }
            hset.add(item);
        }
        return false;
    }
}
