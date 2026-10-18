class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var result = "";
        strs.forEach(str =>{
            result += str.length.toString().length.toString() + str.length + str;
        })
        console.log(result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var result = [];
        var i = 0;
        while(i < str.length){
            //i = 0
            var digStartInd = i + 1; //0 + 1 = 1
            var digEndInd = digStartInd + Number(str[i]);  //1+1 = 2
            var wordCount = Number(str.slice(digStartInd, digEndInd)); //(1,2) = 5
            console.log(digStartInd, digEndInd, wordCount); 
            var wordStartInd = digEndInd; //2
            var wordEndInd = wordStartInd + wordCount; //2 + 5 = 7
            var word = str.slice(wordStartInd,wordEndInd); //(2,7) = hello
            console.log(word);
            result.push(word);
            i = wordEndInd; //7
            console.log(i);
        }
        return result;
    }
}
