class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        var l = 0;
        var r = 0;
        var n = s.length;
        var count = 0;
        var maxCount = 0;
        var hset = new Set();
        while (r < n) {
            var char = s[r];
            if (!hset.has(char)) {
                hset.add(char);
                count++;
                r++;
                maxCount = Math.max(maxCount, count);
            } else {
                while (hset.has(char) && l < n) {
                    hset.delete(s[l]);
                    count--;
                    l++;
                }
            }
        }
        return maxCount;
    }
}
