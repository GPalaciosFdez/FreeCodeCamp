function sumPrimes(num) {
    var sum = 2;

    function isPrime(num) {

        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (var i = 3; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

sumPrimes(10);