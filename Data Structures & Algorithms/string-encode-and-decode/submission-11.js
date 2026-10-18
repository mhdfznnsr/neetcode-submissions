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
            var digStartInd = i + 1; 
            var digEndInd = digStartInd + Number(str[i]); 

            var wordCount = Number(str.slice(digStartInd, digEndInd)); 
 
            var wordStartInd = digEndInd; 
            var wordEndInd = wordStartInd + wordCount; 
            
            var word = str.slice(wordStartInd,wordEndInd); 
            result.push(word);
            i = wordEndInd;
        }
        return result;
    }
}
