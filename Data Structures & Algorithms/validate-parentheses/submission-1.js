class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isMatch(left,right){
        var pair = left + right;
        if(pair === "[]") return true;
        else if (pair === "{}") return true;
        else if (pair === "()") return true;
        else false;
    }
    isValid(s) {
        var stack = new Array();
        stack.push(s[0]);
        for(var i = 1;i<s.length;i++){
            var topValue = stack[stack.length - 1];
            if(this.isMatch(topValue,s[i])){
                stack.pop();
            }
            else{
                stack.push(s[i]);
            }
        }
        if(stack.length === 0) return true
        return false;
    }
}
