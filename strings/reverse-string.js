/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Time complexity O(N)
// Space cpmplexity O(1)

var reverseString = function(s) {

    let start = 0;
    let end = s.length-1;

    while(start < end){
        [s[start], s[end]] = [s[end], s[start]];

        start++;
        end--;
    }

};