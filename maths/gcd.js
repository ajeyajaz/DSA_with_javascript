//  Time complexity  O(sqr(min(n1, n2)))
//  Time complexity  O(sqr(n)) where n is divisors of min(n1, n2)



class Solution {
    GCD(n1, n2) {

        const minN = Math.min(n1, n2);
        let commonDivisor =  0;

        for(let i = 1; i * i <= minN; i++){

            if(n1 % i === 0){
                if(n2 % i === 0){
                    commonDivisor = Math.max(commonDivisor, i);
                }
            }
            
            const num = minN / i;

            if(n1 % num === 0){
                if(n2 % num === 0) commonDivisor = Math.max(commonDivisor, num)
            }
                
        }
        return commonDivisor;
    }
}
