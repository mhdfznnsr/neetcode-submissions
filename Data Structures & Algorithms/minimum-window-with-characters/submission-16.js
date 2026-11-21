class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    minWindow(s, t) {
        if (t.length > s.length) return "";
        var tMap = new Map();
        for (var i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
        }
        var minLength = Number.MAX_SAFE_INTEGER;
        var count = t.length;
        var startInd = 0;
        var l = 0;
        var r = 0;
        while (r < s.length) {
            var ch = s[r];
            if (tMap.has(ch) && tMap.get(ch) > 0) {
                count--;
            }
            tMap.set(ch, (tMap.get(ch) ?? 0) - 1);
            while (count === 0) {
                if (r - l + 1 < minLength) {
                    minLength = r - l + 1;
                    startInd = l;
                }
                tMap.set(s[l], (tMap.get(s[l]) ?? 0) + 1);
                if (tMap.get(s[l]) > 0) count++;
                l++;
            }
            r++;
        }
        console.log(startInd, minLength);
        return minLength === Number.MAX_SAFE_INTEGER ? "" : s.slice(startInd, startInd + minLength);
    }
}
