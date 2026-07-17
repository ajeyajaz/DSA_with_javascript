/**
 * @param {string} s
 * @return {number}
 */

//  Time complexity O(N * N)
// space complexity O(N)
var beautySum = function(s) {
    let beauty = 0;

    for (let i = 0; i < s.length; i++) {
        const freqMap = new Map();

        for (let j = i; j < s.length; j++) {
            // Add current character
            freqMap.set(s[j], (freqMap.get(s[j]) || 0) + 1);

            let maxFreq = 0;
            let minFreq = Infinity;

            // Recompute max and min frequencies
            for (const count of freqMap.values()) {
                maxFreq = Math.max(maxFreq, count);
                minFreq = Math.min(minFreq, count);
            }

            beauty += (maxFreq - minFreq);
        }
    }

    return beauty;
};