/**
 * @param {string} s
 * @return {string}
 */

/**
 *  Brute Force
 * Time complexity O(N*N*N)
 * space complexity O(N)
 */ 


var longestPalindrome = function(s) {
    
    function isPalindrome(str){
        let end = str.length-1;
        let start = 0;

        while(start < end){

            if(str[start] !== str[end]) return false;
            start++;
            end--;
        }

        return true;
    }

    let longestPalindrome = ''
    for(let i = 0; i < s.length; i++){

        for(let j = i; j < s.length; j++){


            if((j - i) + 1 > longestPalindrome.length){
                const subString = s.slice(i, j+1);

                if(isPalindrome(subString) && longestPalindrome.length < subString.length){
                    longestPalindrome = subString;
                }
            } 
        }

    }

    return longestPalindrome;
};
