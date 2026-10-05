class Solution {
    public boolean checkInclusion(String s1, String s2) {
        HashMap<Character,Integer> hmap1 = new HashMap<>();
        for(char c : s1.toCharArray()){
            hmap1.put(c,hmap1.getOrDefault(c,0) + 1);
        }
        int l=0;
        int count = 0;
        boolean isFirstChar = true;
        for(int r=0;r<s2.length();r++){
            char ch = s2.charAt(r);
            if(!hmap1.containsKey(ch)){
                count = 0;
                int k = r - 1;
                while(k >= l && hmap1.containsKey(s2.charAt(k))){
                    hmap1.put(s2.charAt(k),hmap1.getOrDefault(s2.charAt(k),0) + 1);
                    k--;
                }
                isFirstChar = true;
            }
            else if(hmap1.getOrDefault(ch,0) > 0){
                if(isFirstChar){
                    l = r;
                    isFirstChar = false;
                }
                count++;
                hmap1.put(ch,hmap1.getOrDefault(ch,0) - 1);
                if(count == s1.length()){
                    return true;
                }
            }
            else{
                
                while(hmap1.getOrDefault(ch,0) == 0){
                    char temp = s2.charAt(l);
                    hmap1.put(temp,hmap1.getOrDefault(temp,0) + 1);
                    l++;
                    count--;
                }
                hmap1.put(ch,hmap1.getOrDefault(ch,0) - 1);
                count++;
                
                
            }
        }

        return false;
    }
}
