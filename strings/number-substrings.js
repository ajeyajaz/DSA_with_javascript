function countSubstrings(s, k) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const set = new Set();

        for (let j = i; j < s.length; j++) {
            set.add(s[j]);

            if (set.size === k) {
                count++;
            } else if (set.size > k) {
                break;
            }
        }
    }

    return count;
}

console.log(countSubstrings("abcbaa", 3)); // 8