class Solution {
    public int[] dailyTemperatures(int[] temp) {
        int len = temp.length;
        int[] result = new int[len];

        for(int i=0;i<len;i++){
            int j=i+1;
            for(;j<len;j++){
                if(temp[j] > temp[i]){
                    result[i] = j - i;
                    break;
                }
            }
            if(j == len) result[i] = 0;
        }
        return result;
    }
}
