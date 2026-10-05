class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int l = 0;
        int maxVal = Integer.MIN_VALUE;
        int[] res = new int[nums.length - k + 1];
        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b - a);
        HashMap<Integer,ArrayList<Integer>> hmap = new HashMap<>();
        for(int r = 0;r<nums.length;r++){
            pq.add(nums[r]);
            hmap.computeIfAbsent(nums[r],c -> new ArrayList<Integer>()).add(r);
            if(r - l + 1 == k){
                res[l] = pq.peek();
                hmap.get(nums[l]).remove(0);
                if(nums[l] == pq.peek()){
                    pq.poll();
                    //hmap.put(nums[l],hmap.getOrDefault(nums[l],0) - 1);
                    if(hmap.containsKey(pq.peek()) && hmap.get(pq.peek()).size() == 0){
                        pq.poll();
                    }

                }
                
                l++;
                
            }
            
        }
        return res;
    }
}
