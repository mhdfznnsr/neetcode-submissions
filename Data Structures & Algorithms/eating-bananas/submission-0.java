class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int maxPile = piles[0];
        int result = 1;
        for(int pile : piles){
            maxPile = Math.max(maxPile,pile);
        }

        int l = 1;
        int r = maxPile;

        while(l <= r){
            int k = (l + r) / 2;
            double totalTime = 0;
            for(int pile : piles){
                totalTime += Math.ceil((double)pile / k);
            }

            if(totalTime <= h){
                result = k;
                r = k - 1;
            }
            else{
                l = k + 1;
            }
        }
        return result;
    }
}
