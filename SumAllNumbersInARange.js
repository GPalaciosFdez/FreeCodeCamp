function sumAll(arr) {
    var sum = 0;
    var low = Math.min(arr[0], arr[1]);
    var high = Math.max(arr[0], arr[1]);

    for (var i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
}

sumAll([1, 4]);