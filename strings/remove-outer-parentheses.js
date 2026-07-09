/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {

    let left = 0;
    let right = 0;
    let result = ""

    let j = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(") left++;
        if(s[i] === ")") right++

        
        if(left === right){
                result += s.slice(j + 1, i);

            left = 0;
            right = 0
            j = i + 1
        }
    }

    return result
    
};

// time complexity = n
// space complexity = n