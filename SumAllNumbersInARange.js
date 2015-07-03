function sumAll(arr) {
    var sum = 0;
    var low = 0;
    var high = 0;
    if (arr[0] > arr[1]) {
        low = arr[1];
        high = arr[0];
    } else {
        low = arr[0];
        high = arr[1];
    }

    for (var i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
}

sumAll([1, 4]);