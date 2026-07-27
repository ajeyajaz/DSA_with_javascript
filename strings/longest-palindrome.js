/**
 * @param {string} s
 * @return {number}
 */

//  Time complexity O(N);
// space complexity O(N)


var longestPalindrome = function (s) {

    const frqMap = new Map();


    for (let char of s) {
        frqMap.set(char, (frqMap.get(char) || 0) + 1);
    }

    let length = 0
    for (let [char, frq] of frqMap.entries()) {

        if (frq % 2 === 0) {
            length += frq;
            frqMap.delete(char);
        }
        else length += (frq - 1);
    }

    return frqMap.size > 0 ? length + 1 : length;

};