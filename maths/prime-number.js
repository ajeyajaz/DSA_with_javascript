

// time complexity sqr(n)
// space complexity O(1)

function isPrime(n) {
    //your code goes here

    for (let i = 1; i <= n; i++) {

        if (n % i === 0) {
            if (i !== 1 && i !== n){
                return false
            }
        }
    }
    return true
}


console.log(isPrime(8))