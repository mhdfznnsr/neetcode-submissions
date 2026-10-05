class Solution {
    public int maxCharCount(HashMap<String,Integer> hmap){
        int maxCount = 0;
        for(int v : hmap.values()){
            maxCount = Math.max(maxCount,v);
        }
        return maxCount;
    }
    public int characterReplacement(String str, int k) {
        StringBuilder sb = new StringBuilder("");
        HashMap<String,Integer> hmap = new HashMap<>();
        int count = 0;
        int s = 0;
        for(int e=0;e<str.length();e++){
            String c = String.valueOf(str.charAt(e));
            sb.append(c);
            hmap.put(c,hmap.getOrDefault(c,0) + 1);
            int length = e - s + 1;
            int replace = length - maxCharCount(hmap);
            if(replace <= k){
                count = Math.max(count,length);
            }
            else{
                String ch = String.valueOf(sb.charAt(0));
                hmap.put(ch,hmap.get(ch) - 1);
                sb.delete(0,1);
                s++;

            }
        }

        return count;
    }
}
