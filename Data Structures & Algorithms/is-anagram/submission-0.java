class Solution {
    public boolean isAnagram(String s, String t) {

        if (s.length() != t.length()) {
            return false;
        }

        HashMap<Character, Integer> hmap = new HashMap<>();

        // Count frequency for characters in the first string
        for (char c : s.toCharArray()) {
            hmap.put(c, hmap.getOrDefault(c, 0) + 1);
        }

        // Decrease frequency based on characters in the second string
        for (char c : t.toCharArray()) {
            if (!hmap.containsKey(c) || hmap.get(c) == 0) {
                return false;
            }
            hmap.put(c, hmap.get(c) - 1);
        }

        // Ensure all values in the map are 0
        for (int count : hmap.values()) {
            if (count != 0) {
                return false;
            }
        }

        return true;

    }
}
