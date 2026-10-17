class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var hm = new Map();
        var maxValue = 0;
        var result = [];
        nums.forEach(num =>{
            hm.has(num) ? hm.set(num,hm.get(num) + 1) : hm.set(num,1);
        });
        
        var arr = Array.from({length: nums.length + 1},() => []);
        for(const [key,value] of hm){
            arr[value].push(key);
            if(value > maxValue)  maxValue = value;
        }
        while(k > 0 && maxValue > 0){
            if(arr[maxValue].length > 0){
                result.push(...arr[maxValue]);
                k -= arr[maxValue].length;
            }
            maxValue--;
        }
        console.log(result);
        return result;

    }
}
