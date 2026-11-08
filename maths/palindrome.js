/**
 * @param {number} x
 * @return {boolean}
 */

//  Time O(logn)
// Space O(1)

var isPalindrome = function(x) {

    if(x < 0) return false;


    let reverse = 0;
    let absX = x;

    while(absX > 0){

        const digit = absX  % 10;
        reverse = reverse * 10 + digit;
        absX = Math.floor(absX / 10);
    }

    return x === reverse;
};