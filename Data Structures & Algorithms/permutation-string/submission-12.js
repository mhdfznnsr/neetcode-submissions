class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        var s1hmap = new Map();
        var s2hmap = new Map();
        var s1count = s1.length;
        var s2count = 0;
        var l = 0;
        var r = 0;

        for (const c of s1) {
            s1hmap.has(c) ? s1hmap.set(c, s1hmap.get(c) + 1) : s1hmap.set(c, 1);
        }
        while (r < s2.length) {
            var ch = s2[r];
            if (!s1hmap.has(ch)) {
                r++;
                l = r;
                s2count = 0;
                s2hmap.clear();
            } else {
                s2hmap.has(ch) ? s2hmap.set(ch, s2hmap.get(ch) + 1) : s2hmap.set(ch, 1);
                while (s2hmap.get(ch) > s1hmap.get(ch)) {
                    s2hmap.set(s2[l], s2hmap.get(s2[l]) - 1);
                    s2count--;
                    l++;
                }
                r++;
                s2count++;
            }
            //     if (s1hmap.has(ch) && s2hmap.has(ch)) {
            //     if (s2hmap.get(ch) < s1hmap.get(ch)) {
            //         s2hmap.set(ch, s2hmap.get(ch) + 1);
            //         r++;
            //         s2count++;
            //     } else {
            //         while()
            //     }
            // } else {
            //     s2hmap.set(ch, 1);
            //     r++;
            //     s2count++;
            // }
            if (s1count === s2count) return true;
        }
        return false;
    }
}
