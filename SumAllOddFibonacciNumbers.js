function sumFibs(num) {
    var fibonacci = [0, 1, 1];
    var sum = 0;
    for (var i = 2; fibonacci[i - 1] <= num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if (fibonacci[i - 1] % 2 !== 0) {
            sum += fibonacci[i - 1];
        }
    }
    return sum;
}

sumFibs(4);