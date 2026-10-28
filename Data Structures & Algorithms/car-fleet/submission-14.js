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
        var stack = new Array();
        for (const pair of pairs) {
            var time = (target - pair.position) / pair.speed;
            var topIndex = stack.length - 1;
            if(stack.length === 0 || time > stack[topIndex]){
                stack.push(time);
            }
        }
        return stack.length;
    }
}
