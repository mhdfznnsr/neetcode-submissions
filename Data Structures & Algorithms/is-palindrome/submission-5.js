class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValidChar(str,i){
        if((str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) ||
                (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
                (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) return true;
        return false;
    }
    isPalindrome(s) {
        s = s.toLowerCase();
        console.log(s);
        var i = 0;
        var j = s.length - 1;
        while(i < j){
            while(!this.isValidChar(s,i) && i < s.length) {
                i++;
            }

            while(!this.isValidChar(s,j) && j >= 0) {
                j--;
            }
            console.log(s[i]," ",s[j]);
            if(s[i] !== s[j])  return false;
            i++;
            j--;
        }
        return true;
    }
}
