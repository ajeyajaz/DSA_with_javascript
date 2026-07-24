/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// Time complexity O(N)
// Space complexity O(N)


var wordPattern = function(pattern, s) {

    const map = new Map();
    const visitedWords = new Set();
    const words = s.split(" ");

    if(pattern.length !== words.length) return false;

    for(let i = 0; i < pattern.length; i++){
        const mappedWord = map.get(pattern[i]) || false;

        if(mappedWord){
            if(mappedWord !== words[i]) return false;
        }
        
        if(!mappedWord){
            if(visitedWords.has(words[i])) return false;
        }

        
        map.set(pattern[i], words[i]);
        visitedWords.add(words[i]);
    }
    return true;

};