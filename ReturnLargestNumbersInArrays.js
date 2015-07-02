function largestOfFour(arr) {
    // You can do this!
    largest = [];

    for (var i = 0; i < arr.length; i++) {
        num = arr[i][0];
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > num) {
                num = arr[i][j];
            }
        }
        largest.push(num);
    }
    return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);