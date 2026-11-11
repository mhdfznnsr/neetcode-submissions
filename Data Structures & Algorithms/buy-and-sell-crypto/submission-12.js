class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // var l = 0;
        // var r = 0;
        // var n = prices.length;
        // var res = 0;
        // while(r < n){
        //     if(prices[l] < prices[r]) res = Math.max(res,prices[r] - prices[l]);
        //     else l = r;
        //     r++;
        // }
        // return res;

        var n = prices.length;
        var maxPrice = prices[n-1];
        var maxProfit = 0;
        for(var i=n-1;i>=0;i--){
            maxPrice = Math.max(maxPrice,prices[i]);
            maxProfit = Math.max(maxProfit,maxPrice-prices[i]);
        }
        return maxProfit;
    }
}
