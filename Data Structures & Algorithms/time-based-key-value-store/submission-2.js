class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        !this.keyStore.has(key)
            ? this.keyStore.set(key, [[timestamp, value]])
            : this.keyStore.get(key).push([timestamp,value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";
        var res = "";
        var l = 0;
        var r = this.keyStore.get(key).length - 1;
        var list = this.keyStore.get(key);
        while(l<=r){
            var mid = Math.floor(l + (r-l)/2);
            if(list[mid][0] <= timestamp){
                res = list[mid][1];
                l = mid + 1;
            }
            else r = mid - 1;
        }
        return res;
    }
}
