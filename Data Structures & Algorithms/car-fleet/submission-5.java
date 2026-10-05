class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        List<int[]> ls = new ArrayList<>();
        Stack<Float> s = new Stack<>();
        for(int i=0;i<position.length;i++){
            ls.add(new int[]{position[i],speed[i]});
        }
        ls.sort((a,b) -> b[0] - a[0]);
        for(int[] car : ls){
            float time = ((float)target - car[0]) / car[1];
            if(s.isEmpty() || time > s.peek()){
                s.push(time);
            }
        }
        return s.size();
    }
}
