class Solution {
    public int lengthOfLongestSubstring(String s) {
        // if(s.length() == 0) return 0;
        // if(s.replace(" ","") == ""){
        //     return 1;
        // }
        
        String sb = "";
        int start = 0;
        int count = 0;
        for(int end=0;end<s.length();end++){
            String value = String.valueOf(s.charAt(end));
            while(sb.contains(value)){
                sb = sb.substring(1);
                start++;
            }
            sb += value;
            count = Math.max(count,end - start + 1);
        }

        return count;
    }
}
