/**
 * @param {string} s
 * @return {string}
 */

// time complexity = O(N)
// space complexity = O(N)

var frequencySort = function(s) {
    const frqMap = new Map();

    for(let char of s){
        frqMap.set(char, (frqMap.get(char) || 0) + 1)
    }

    const buckets = Array.from({length : s.length + 1}, () => []);

    for(let [char, freq] of frqMap.entries()){
        buckets[freq].push(char);
    }


    const result = [];
    for(let freq = buckets.length -1; freq >= 0; freq--){
        for(let char of buckets[freq])
            result.push(char.repeat(freq))
    }
    return result.join('');

};


const s = 'tree'
console.log('result', frequencySort(s))