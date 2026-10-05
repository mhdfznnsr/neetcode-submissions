class Solution {
    /*
    SECOND SOLUTION:
    1. get all the count of the elements in a hashmap.
    2. create a priority queue to store them in descending order of their values using comparator.
    3. traverse the priority queue and poll the elements for k times.
    */
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer,Integer> hmap = new HashMap<>();
        int[] res = new int[k]; 
        for(int num : nums){
            hmap.put(num, hmap.getOrDefault(num,0) + 1);
        }

        PriorityQueue<int[]> queue = new PriorityQueue<>((a,b) ->{
            if(a[0] > b[0]) return -1; //assume this like if a[0] > b[0] then value toSwap should be false means -1
            if(a[0] < b[0]) return 1; //assume this like if a[0] < b[0] then value toSwap should be true means 1
            return 0;
        });

        hmap.forEach((key,value) ->{
            queue.add(new int[]{value,key});
        });

        for(int i=0;i<k;i++){
            res[i] = queue.poll()[1];
        }

        return res;

        
    }
}
