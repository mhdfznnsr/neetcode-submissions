class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        var l = 0;
        var r = 0;
        var maxLen = 0;
        var maxFre = 0;
        var freMap = new Array(26).fill(0);
        while(r < s.length){
            freMap[s.charCodeAt(r) - 65]++;
            maxFre = Math.max(maxFre,freMap[s.charCodeAt(r) - 65]);
            while((r - l + 1) - maxFre > k){
                // maxFre = 0;
                freMap[s.charCodeAt(l) - 65]--;
                // for(var i = 0;i<26;i++){
                //     maxFre = Math.max(maxFre,freMap[i]);
                // }
                l++;
            }
            if((r-l+1) - maxFre <= k){
                maxLen = Math.max(maxLen,r-l+1);
            }
            r++;
        }  
        return maxLen;
    }
}
