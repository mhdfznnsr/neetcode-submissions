class Solution {
    public int[] dailyTemperatures(int[] temp) {
        int len = temp.length;
        int[] result = new int[len];
        Stack<int[]> s = new Stack<>();

        for(int i=0;i<len;i++){
            while(!s.isEmpty() && s.peek()[0] < temp[i]){
                int[] pair = s.pop();
                int value = pair[0];
                int index = pair[1];
                result[index] = i - index; 
            }
            int[] arr = new int[2];
            arr[0] = temp[i];
            arr[1] = i;
            s.push(arr);
        }
        return result;
    }
}
