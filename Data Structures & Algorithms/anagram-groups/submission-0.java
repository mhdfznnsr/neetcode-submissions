class Solution {
    public boolean checkIfAnagram(String s, String t) {

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

    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> result = new ArrayList<List<String>>();
        
        for(String str : strs){
            boolean matchFound = false;
            for(int i = 0; i < result.size(); i++){
                if(checkIfAnagram(str,result.get(i).get(0))){
                    result.get(i).add(str);
                    matchFound = true;
                    break;
                }
            }
            if(!matchFound){
                List<String> temp = new ArrayList<>();
                temp.add(str);
                result.add(temp);
            }
        }

        return result;
    }
}
