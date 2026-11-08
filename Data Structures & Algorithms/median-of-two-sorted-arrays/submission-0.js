class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        var l = 0;
        var r = 0;
        var arr = new Array(nums1.length + nums2.length);
        var i = 0;
        while(l < nums1.length && r < nums2.length){
            if(nums1[l] < nums2[r]){
                arr[i++] = nums1[l++]
            }
            else{
                arr[i++] = nums2[r++] 
            }
        }
        while(l < nums1.length) arr[i++] = nums1[l++];
        while(r < nums2.length) arr[i++] = nums2[r++];
        
        if((nums1.length + nums2.length) % 2 == 1){
            var minInd = Math.floor((nums1.length + nums2.length) / 2);
            console.log(minInd);
            return arr[minInd];
        }
        else{
             var minInd2 = Math.floor((nums1.length + nums2.length) / 2);
             var minInd1 = minInd2 - 1;
             return (arr[minInd1] + arr[minInd2]) / 2;
        }

    }
}
