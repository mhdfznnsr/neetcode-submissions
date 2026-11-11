class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var maxDay = new Array(prices.length).fill(0);
        var res = 0;
        for(var i=prices.length-2;i>=0;i--){
            if(prices[i] < prices[i+1] || prices[i] < maxDay[i+1]) maxDay[i] = Math.max(maxDay[i+1],prices[i+1]);
            res = Math.max(res,maxDay[i] - prices[i]);
        }
        return res;
    }
}
