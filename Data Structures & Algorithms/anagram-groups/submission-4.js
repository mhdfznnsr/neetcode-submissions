class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        var hm = new Map();
        strs.forEach((str) => {
            var arr = new Array(26).fill(0);
            for (var i = 0; i < str.length; i++) {
                arr[str.charCodeAt(i) - 97]++;
            }
            var json = JSON.stringify(arr);
            // console.log(json);
            hm.has(json) ? hm.get(json).push(str) : hm.set(json, [str.toString()]);
        });
        // console.log(hm);
        return Array.from(hm.values());
    }
}
