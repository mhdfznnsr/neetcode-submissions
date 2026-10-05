class Solution {
    public int maxProfit(int[] prices) {
        int len = prices.length;
        int l = 0;
        int r = l + 1;
        int maxProfit = 0;
        while(r < len){
            if(prices[r] > prices[l]){
                maxProfit = Math.max(maxProfit,prices[r] - prices[l]);
            }
            else{
                l = r;
            }
            r++;
        }

        return maxProfit;
    }
}
