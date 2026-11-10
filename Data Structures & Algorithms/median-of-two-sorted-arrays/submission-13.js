class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        var n1 = nums1.length;
        var n2 = nums2.length;
        if(n1 > n2) return this.findMedianSortedArrays(nums2, nums1);
        var l = 0;
        var r = n1;
        var n = (n1+n2);
        var left = Math.floor((n1+n2+1)/2);
        while(l <= r){
            var mid1 = Math.floor((l+r)/2);
            var mid2 = left - mid1;
            //console.log(mid1,mid2);
            var l1 = Number.MIN_SAFE_INTEGER;
            var l2 = Number.MIN_SAFE_INTEGER;
            var r1 = Number.MAX_SAFE_INTEGER;
            var r2 = Number.MAX_SAFE_INTEGER;
            if(mid1 < n1) r1 = nums1[mid1];
            if(mid2 < n2) r2 = nums2[mid2];
            if((mid1 - 1) >= 0) l1 = nums1[mid1-1];
            if((mid2 - 1) >= 0) l2 = nums2[mid2-1];

            if(l1 <= r2 && l2 <= r1){
                if(n % 2 === 1) return Math.max(l1,l2);
                return (Math.max(l1,l2) + Math.min(r1,r2))/2;
            }
            else if(l1 > r2) r = mid1 - 1;
            else l = mid1 + 1;
        }
        return 0;
    }
}
