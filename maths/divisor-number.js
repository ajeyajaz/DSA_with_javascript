
// time complexity: O(n) where n is the input number
//space complexity: O(n) where n is the input number

class Solution {

    divisors(n) {

        const result = [];

        for(let i = 1; i <=n; i++){

            const isDivisor = n % i === 0;
            if(isDivisor) result.push(i);
        }

        return result;
    }
}