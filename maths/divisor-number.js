
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


// Time Complexity sqr(n)
// Space Complexity sqr(n)

const n = 36;
const result = [];

for (let i = 0; i * i <=n; i++){

    if(n % i === 0){
        result.push(i);

        if(i !== n / i){
            result.push(n / i)
        }
    }
}


console.log(result)