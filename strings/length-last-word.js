/**
 * @param {string} s
 * @return {number}
 */

// Time complexity O(N)
//  Space complexity O(N)

var lengthOfLastWord = function(s) {
    

    // skip beginning space from the end;
    let idx;
    for(let i = s.length -1; i >= 0; i--){
        idx = i;

        if(s[i] !== ' ') break
    }

    let count = 0;
    for(let i = idx; i >=0; i--){

        if(s[i] === ' ') return count;
        count++;
    }

    return count;
};