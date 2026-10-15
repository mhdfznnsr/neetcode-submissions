class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        var hashMap = new Map();
        var count = 0;
        for(var i=0;i<s.length;i++){
            if(hashMap.has(s[i])){
                hashMap.set(s[i], hashMap.get(s[i]) + 1);
            }
            else{
                hashMap.set(s[i],1);
            } 
            count++;
        }
        console.log(hashMap);
        for(var i=0;i<t.length;i++){
            if(hashMap.has(t[i]) && hashMap.get(t[i]) > 0){
                hashMap.set(t[i], hashMap.get(t[i]) - 1);
                count--;
            }
        }
        console.log(hashMap);
        console.log(count);
        if(count === 0) return true
        return false;
    }
}
