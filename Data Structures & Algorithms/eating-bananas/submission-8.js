class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        var l = 1;
        var r = piles[0];
        for(var i=0;i<piles.length;i++){
            //l = Math.min(l,piles[i]);
            r = Math.max(r,piles[i]);
        }
        var res = r;
        while(l <= r){
            var mid = Math.floor(l + (r - l) / 2);
            var hours = 0;
            for(var i=0;i<piles.length;i++){
                hours += Math.ceil(piles[i] / mid);
            }
            // console.log(mid);
            if(hours <= h) res = Math.min(res,mid);
            if(hours <= h) r = mid - 1;
            else l = mid + 1;
        }
        return res;
    }
}
