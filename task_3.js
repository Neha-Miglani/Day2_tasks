function is_prime(num) {
    if (num <= 1) 
        return false;
    if (num === 2) 
        return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) 
            return false;
    }
    return true;
}

function filter_primes(numbers) {
    return numbers.filter(is_prime);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let primes = filter_primes(numbers);
console.log(primes); 
