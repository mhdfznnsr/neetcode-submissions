class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    isOperator(temp) {
        if (temp === "+" || temp === "-" || temp === "*" || temp === "/") return true;
        return false;
    }
    getResult(a, b, oper) {
        if (oper === "+") return a + b;
        if (oper === "-") return a - b;
        if (oper === "*") return a * b;
        if (oper === "/") {
            // if(a / b < 0) return 0;
            return Math.trunc(a / b);
        }
    }
    evalRPN(tokens) {
        var stack = [];
        var result = 0;
        for (var i = 0; i < tokens.length; i++) {
            if (this.isOperator(tokens[i])) {
                var b = stack.pop();
                var a = stack.pop();
                var res = this.getResult(a, b, tokens[i]);
                stack.push(res);
                result += res;
            } else {
                stack.push(Number(tokens[i]));
            }
            // console.log(stack);
        }
        return stack.pop();
    }
}
