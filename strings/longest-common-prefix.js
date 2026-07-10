/**
 * @param {string[]} strs
 * @return {string}
 */


// time complexity O( M * N + M * M) N is strs.length; M strs[0].length;
// space complexity O(M)

var longestCommonPrefix = function(strs) {
    let result = "";

    for(let i = 0; i < strs[0].length; i++){
        const char = strs[0][i];
        
        for(let j = 0; j < strs.length; j++){
            
            if(char !== (strs[j][i] || '')) return result;
        }
        result += char;
    }

    return result;
};
