class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer,Integer> hmap = new HashMap<>();

        for(int num : nums){
            hmap.put(num, hmap.getOrDefault(num,0) + 1);
        }

        List<int[]> ls = new ArrayList<>();
        hmap.forEach((key,value) ->{
            ls.add(new int[]{value,key});
        });

        ls.sort((a,b) -> b[0] - a[0]);

        int[] res = new int[k];
        for(int i=0;i<k;i++){
            res[i] = ls.get(i)[1];
        }

        return res;
        
    }
}
