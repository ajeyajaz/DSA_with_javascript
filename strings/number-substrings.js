// function countSubstrings(s, k) {
//     let count = 0;

//     for (let i = 0; i < s.length; i++) {
//         const set = new Set();

//         for (let j = i; j < s.length; j++) {
//             set.add(s[j]);

//             if (set.size === k) {
//                 count++;
//             } else if (set.size > k) {
//                 break;
//             }
//         }
//     }

//     return count;
// }

// console.log(countSubstrings("abcbaa", 3)); // 8

// Optimal Solution

// Time complexity O(N)
// Space complexity O(N)

function countSubstrings(s, k){

    function KDistintCharSubstring(k){
        const charCountMap = new Map();

        let l = 0
        let count = 0;

        for(let r = 0; r < s.length; r++){
            charCountMap.set(s[r], (charCountMap.get(s[r]) || 0)+1);

            while(l < r && charCountMap.size > k){
                charCountMap.set(s[l], charCountMap.get(s[l]) - 1);

                if(charCountMap.get(s[l]) === 0) charCountMap.delete(s[l]);
                l++;
            }

            if(charCountMap.size <= k){
                count += r - l + 1
            }


        }

        return count;
    }

    return KDistintCharSubstring(k) - KDistintCharSubstring(k-1)

}

console.log(countSubstrings("abcbaa", 3)); // 8