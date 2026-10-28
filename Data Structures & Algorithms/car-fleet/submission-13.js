class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        var count = 0;
        var pairs = position
            .map((pos, ind) => ({
                position: pos,
                speed: speed[ind],
            }))
            .sort((a, b) => b.position - a.position);
        // console.log(pairs);
        var stack = new Array();
        for (const pair of pairs) {
            var time = (target - pair.position) / pair.speed;
            // console.log(time);
            if (stack.length === 0) {
                stack.push(time);
                continue;
            }
            var topIndex = stack.length - 1;
            if (time <= stack[topIndex]) {
                stack.push(Math.max(time,stack[topIndex]));
            } else {
                while (stack.length > 0) {
                    stack.pop();
                }
                count++;
                stack.push(time);
            }
        }
        // console.log(stack.length);
        if(stack.length > 0) count++;
        return count;
    }
}
