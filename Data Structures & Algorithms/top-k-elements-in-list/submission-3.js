class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var hm = new Map();
        nums.forEach(num =>{
            hm.has(num) ? hm.set(num,hm.get(num) + 1) : hm.set(num,1);
        });
        var arr = [];
        for(const [key,value] of hm){
            arr.push([value,key])
        }
        arr.sort((a,b) => b[0] - a[0]);
        var result = []
        for(var i=0;i<k;i++){
            result.push(arr[i][1]);
        }
        return result;
        // console.log(newhm);

    }
}
