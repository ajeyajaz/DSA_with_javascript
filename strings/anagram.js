/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time complexity O(N)
// Space complexity O(N)

var isAnagram = function (s, t) {
    const charFrequency = new Map();

    if (t.length < s.length) return false


    for (let char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1)
    }


    for (let char of t) {
        const charCount = charFrequency.get(char) || 0

        if (!charCount) return false;
        charFrequency.set(char, charCount - 1)
    }

    return true
};