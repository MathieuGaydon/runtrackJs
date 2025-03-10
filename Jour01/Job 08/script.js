
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}


function sommeNombresPremiers(a, b) {
    if (isPrime(a) && isPrime(b)) {
        return a + b; 
    } else {
        return false; 
    }
}

console.log(sommeNombresPremiers(7, 11)); 
console.log(sommeNombresPremiers(4, 11)); 
