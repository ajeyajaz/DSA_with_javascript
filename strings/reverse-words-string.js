/**
 * @param {string} s
 * @return {string}
 */


// Time complexity O(n)
// Space complexity O(n)


var reverseWords = function(s) {
    s = s.split(" ");
    const reversed = [];

    for (let i = s.length -1; i >= 0; i--){
        if(s[i] === "") continue;
        
        reversed.push(s[i])
    }
    return reversed.join(" ");
};

