/**
 * @param {number} x
 * @return {boolean}
 */

// time complexity: O(logn) where n is the input number
//space complexity: O(1)

var isPalindrome = function(x) {
    let absX = Math.abs(x);
    let reversed = 0;

    while(absX > 0){

        const digit = absX % 10;
        reversed = reversed * 10 + digit;

        absX = Math.trunc(absX / 10);
    }

    return reversed === x;
};