//  Time complexity  O(sqr(min(n1, n2)))
//  Time complexity  O(sqr(n)) where n is divisors of min(n1, n2)



class Solution {    
    GCD(n1, n2){

        const n = Math.min(n1, n2);
        const divisorN1 = new Set();

        // n1 
        for (let i = 1; i * i <= n; i++){

             if(n1 % i === 0){
                divisorN1.add(i);
                divisorN1.add(n1 / i);
            }
        }

        // n2
        let greatestDivisor = 0;
        for(let i = 1; i * i <= n; i++){

            if(n2 % i === 0){

                if(divisorN1.has(i)){
                    greatestDivisor = Math.max(greatestDivisor,  i);
                }

                if(divisorN1.has(n2 / i)){
                    greatestDivisor = Math.max(greatestDivisor,  n2 / i);
                }
                
            }
    }

    return greatestDivisor;
}
}