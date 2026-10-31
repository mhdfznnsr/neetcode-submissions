class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        var l = 0;
        var r = matrix.length * matrix[0].length - 1; //1*1 = 1
        while(l<=r){ //0 <= 1
            var mid = Math.floor(l + (r - l) / 2); //0
            var lInd = Math.floor(mid / matrix[0].length); //0 / 1 = 0
            var rInd = mid % matrix[0].length; // 0 % 1 = 1
            // console.log(mid,lInd,rInd);
            if(matrix[lInd][rInd] === target) return true;
            else if(target < matrix[lInd][rInd]) r--;
            else l++;
        }
        return false;
    }
}
