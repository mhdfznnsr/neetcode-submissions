class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        var stack = new Array(); //[[38,1],[30,2]]
        var result = new Array(temp.length).fill(0); //[1,0,0,0,0,0,0]
        for (var i = 0; i < temp.length; i++) {
            if (stack.length > 0) {
                var topIndex = stack.length - 1; //1 - 1 = 0
                while (stack[topIndex][0] < temp[i]) {
                    var top = stack.pop();
                    result[top[1]] = i - top[1];
                    // console.log(stack);
                    if(stack.length === 0) break;
                    topIndex = stack.length - 1; 
                }
            }
            stack.push([temp[i], i]);
            // if (stack[topIndex][0] < temp[i]) {
            //     // 38 < 30
            //     var top = stack.pop(); // [30,0]
            //     //console.log(top);
            //     stack.push([temp[i], i]);
            //     result[top[1]] = i - top[1]; // 1 - 0 = 1
            // } else {
            //     stack.push([temp[i], i]);
            //     console.log(stack);
            // }
        }
        return result;
    }
}
