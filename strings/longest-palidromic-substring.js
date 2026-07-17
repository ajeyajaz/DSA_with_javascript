/**
 * @param {string} s
 * @return {string}
 */

/**
 *  Brute Force
 * Time complexity O(N*N*N)
 * space complexity O(N)
 */ 


// var longestPalindrome = function(s) {
    
//     function isPalindrome(str){
//         let end = str.length-1;
//         let start = 0;

//         while(start < end){

//             if(str[start] !== str[end]) return false;
//             start++;
//             end--;
//         }

//         return true;
//     }

//     let longestPalindrome = ''
//     for(let i = 0; i < s.length; i++){

//         for(let j = i; j < s.length; j++){


//             if((j - i) + 1 > longestPalindrome.length){
//                 const subString = s.slice(i, j+1);

//                 if(isPalindrome(subString) && longestPalindrome.length < subString.length){
//                     longestPalindrome = subString;
//                 }
//             } 
//         }

//     }

//     return longestPalindrome;
// };



const longestPalindrome = (s) => {
    if(s.length <= 1) return s

    let start = 0;
    let end = 0;

    function expand(left, right){

        while(left >= 0 && right < s.length){

            if(s[left] !== s[right]) break;

            left--;
            right++;
        }

        return [left+1, right-1]
    }

    for(let i = 0; i < s.length; i++){

        // odd length;
        const [l1, r1] = expand(i, i);
        // even length;
        const [l2, r2] = expand(i, i+1);

        if((r1 - l1) > (end - start)){
            start = l1;
            end = r1
        }

        if((r2 - l2) > (end - start)){
            start = l2;
            end = r2
        }

        
    }
    return s.slice(start, end + 1);
}

console.log(longestPalindrome(""));                  // ""
console.log(longestPalindrome("a"));                 // "a"
console.log(longestPalindrome("aa"));                // "aa"
console.log(longestPalindrome("ab"));                // "a" or "b"

console.log(longestPalindrome("aba"));               // "aba"
console.log(longestPalindrome("abba"));              // "abba"
console.log(longestPalindrome("racecar"));           // "racecar"
console.log(longestPalindrome("abccba"));            // "abccba"

console.log(longestPalindrome("babad"));             // "bab" or "aba"
console.log(longestPalindrome("cbbd"));              // "bb"

console.log(longestPalindrome("abab"));              // "aba" or "bab"
console.log(longestPalindrome("ababab"));            // "ababa" or "babab"

console.log(longestPalindrome("abcdef"));            // "a" (or any single character)
console.log(longestPalindrome("aaaa"));              // "aaaa"
console.log(longestPalindrome("aaaaaa"));            // "aaaaaa"

console.log(longestPalindrome("abac"));              // "aba"
console.log(longestPalindrome("abbae"));             // "abba"
console.log(longestPalindrome("cabacx"));            // "cabac"
console.log(longestPalindrome("abacdfgdcaba"));      // "aba"

console.log(longestPalindrome("forgeeksskeegfor"));  // "geeksskeeg"
console.log(longestPalindrome("abaxyzzyxf"));        // "xyzzyx"

console.log(longestPalindrome("xracecary"));         // "racecar"
console.log(longestPalindrome("xyzabccbay"));        // "abccba"

console.log(longestPalindrome("aaaabaaaa"));         // "aaaabaaaa"
console.log(longestPalindrome("baaaac"));            // "aaaa"

console.log(longestPalindrome("123454321"));         // "123454321"
console.log(longestPalindrome("@#$$#@"));            // "@#$$#@"

console.log(longestPalindrome("zzzzzzzz"));          // "zzzzzzzz"
console.log(longestPalindrome("aacabdkacaa"));       // "aca"
console.log(longestPalindrome("bananas"));           // "anana"
console.log(longestPalindrome("noonmadam"));         // "madam" or "noon"
console.log(longestPalindrome("madamimadam"));       // "madamimadam"