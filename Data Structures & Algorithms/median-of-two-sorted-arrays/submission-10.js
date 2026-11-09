class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if(nums1.length < nums2.length) return this.findMedianSortedArrays(nums2, nums1);
        var l = 0;
        var r = 0;
        var i = 0;
        var n1 = nums1.length;
        var n2 = nums2.length;
        var count = -1;
        var isL = 0;
        var ind2 = Math.floor((n1 + n2) / 2);
        var ind1 = ind2 - 1;
        var mid1 = Number.MIN_SAFE_INTEGER;
        var mid2 = Number.MIN_SAFE_INTEGER;

        // if(n1 === 0){
        //     mid1 = nums2[ind1];
        //     mid2 = nums2[ind2];
        // }
        // else if(n2 === 0){
        //     mid1 = nums1[ind1];
        //     mid2 = nums1[ind2];
        // }
        while(l < n1){
            if(r === n2 || (r < n2 && nums1[l] < nums2[r])){
                l++;
                isL = 1;
            }
            else if(r < n2){
                r++; 
                isL = 0;
            }
            count++;
            if(ind2 === count){
                isL ? mid2 = nums1[l-1] : mid2 = nums2[r-1];
                //break;
            }
            if(ind1 === count){
                isL ? mid1 = nums1[l-1] : mid1 = nums2[r-1];
            };
        }
        // console.log(mid1, mid2);
        if(l === n1 && mid2 == Number.MIN_SAFE_INTEGER) mid2 = nums2[r];
        if(r === n2 && mid2 == Number.MIN_SAFE_INTEGER) mid2 = nums1[l];
        console.log(mid1, mid2);
        var isEven = (n1+n2) % 2;
        if(isEven == 0){
            return (mid1+mid2) / 2;
        }
        else{
            return mid2;
        }
        // while(l < nums1.length) arr[i++] = nums1[l++];
        // while(r < nums2.length) arr[i++] = nums2[r++];
        
        // if((nums1.length + nums2.length) % 2 == 1){
        //     var minInd = Math.floor((nums1.length + nums2.length) / 2);
        //     console.log(minInd);
        //     return arr[minInd];
        // }
        // else{
        //      var minInd2 = Math.floor((nums1.length + nums2.length) / 2);
        //      var minInd1 = minInd2 - 1;
        //      return (arr[minInd1] + arr[minInd2]) / 2;
        // }

    }
}
