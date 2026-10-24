class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push([val, val]);
            return;
        }
        var topIndex = this.stack.length - 1;
        this.stack.push([val, Math.min(val, this.stack[topIndex][1])]); //[[1,1],[2,1],[0,0]]
        //console.log(this.stack);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        var topIndex = this.stack.length - 1;
        return this.stack[topIndex][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        var topIndex = this.stack.length - 1;
        return this.stack[topIndex][1];
    }
}
