/**
 * @param {string} num
 * @return {string}
 */

// time complexity O(N)
// space complexity O(1)

var largestOddNumber = function(num) {
    
    for(let i = num.length - 1; i >= 0; i--){

        if(Number(num[i]) % 2 !== 0){
            return num.slice(0, i+1);
        }
    }

    return "";
};