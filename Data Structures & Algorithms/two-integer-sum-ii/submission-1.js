class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        var i = 0;
        var j = numbers.length - 1;
        while(i < j){
            var sum = numbers[i] + numbers[j];
            if(sum === target) return [i+1,j+1];
            else if(sum < target) i++;
            else j--;
        }
        return [];
    }
}
