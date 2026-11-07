
// Time: O(N)
// Space: O(1)

class Solution {
    countDigit(n) {

        if(n === 0) return 1;

        let count = 0;
        let num = n;

        while(num > 0){

            count++;
            num = Math.floor(num / 10);
        }

        return count;
    }
}