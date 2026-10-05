class Solution {

    public String encode(List<String> strs) {
        String finalStr = "";
        for(String str : strs){
            finalStr += str.length() + "#" + str;
        }

        return finalStr;
    }

    public List<String> decode(String str) {
        List<String> result = new ArrayList<>();
        int i = 0;
        while(i < str.length()){
            int startIndex = i;
            while(str.charAt(i) != '#'){
                i++;
            }
            int endIndex = i;
            int strLength = Integer.parseInt(str.substring(startIndex,endIndex));
            String requiredStr = str.substring(i+1,i + strLength + 1);
            result.add(requiredStr);
            i = i + strLength + 1;
        }

        return result;
    }
}
