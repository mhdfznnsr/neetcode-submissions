class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var l = 0;
        var r = 0;
        var n = prices.length;
        var res = 0;
        while(r < n){
            if(prices[l] < prices[r]){
                res = Math.max(res,prices[r] - prices[l]);
            }
            else{
                l = r;
            }
            r++;
        }
        return res;
    }
}
