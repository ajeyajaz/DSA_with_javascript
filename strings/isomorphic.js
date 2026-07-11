/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// time complexity O(N)
// space complexity O(N)

var isIsomorphic = function(s, t) {

    const mapped_char = new Set();
    const map = new Map();

    for(let i = 0; i < s.length; i++){

        if(map.has(s[i]) && map.get(s[i]) !== t[i])
            return false;

        if(!map.has(s[i]) && mapped_char.has(t[i]))
            return false

        map.set(s[i], t[i]);
        mapped_char.add(t[i]);
    }
    
    return true;
};