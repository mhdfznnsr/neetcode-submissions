class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        var l = 0;
        var r = 0;
        var n = s.length;
        var maxCount = 0;
        var hset = new Set();
        while (r < n) {
            var char = s[r];
            while (hset.has(char)) {
                hset.delete(s[l]);
                l++;
            }
            hset.add(char);
            r++;
            maxCount = Math.max(maxCount,r-l);
        }
        return maxCount;
    }
}
