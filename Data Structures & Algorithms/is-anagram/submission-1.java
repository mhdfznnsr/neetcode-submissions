class Solution {
    public boolean isAnagram(String s, String t) {

        if (s.length() != t.length()) {
            return false;
        }

        HashMap<Character,Integer> hmap = new HashMap<>();

        for(char item: s.toCharArray()){
            hmap.put(item, hmap.getOrDefault(item,0) + 1);
        }

        for(char item: t.toCharArray()){
            if(!hmap.containsKey(item)){
                return false;
            }

            hmap.put(item,hmap.get(item) - 1);
        }

        for(int value : hmap.values()){
            if(value != 0){
                return false;
            }
        }

        return true;

    }
}
