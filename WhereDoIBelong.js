function where(arr, num) {
    // Find my place in this sorted array.
    var value = 0;
    for (var i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            value = i + 1;
        } else {
            return value;
        }
    }
    return value;
}

where([40, 60], 50);