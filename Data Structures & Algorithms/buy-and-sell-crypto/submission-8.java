class Solution {
    public int maxProfit(int[] prices) {
        int len = prices.length;
        int maxProfit = 0;
        for(int i=0;i<len;i++){
            for(int j=i+1;j<len;j++){
                maxProfit = Math.max(maxProfit,prices[j] - prices[i]);
            }
        }

        return maxProfit;
    }
}
