class Solution {
    public int longestConsecutive(int[] sortedNums) {
        if(sortedNums.length == 0) return 0;
        Arrays.sort(sortedNums);
        int maxValue = 1;
        HashMap<Integer,Integer> hmap = new HashMap<>();
        hmap.put(sortedNums[0],1);
        for(int i=1;i<sortedNums.length;i++){
            int prevValue = sortedNums[i] - 1;
            int currValue = sortedNums[i];
            //if(hmap.containsKey(currValue)) continue;
            if(hmap.containsKey(prevValue)){
                int count = hmap.get(prevValue) + 1;
                hmap.put(sortedNums[i],count);
                if(count > maxValue){
                    maxValue = count;
                }
            }
            else{
                hmap.put(currValue,1);
            }
        }
        return maxValue;
    }
}
