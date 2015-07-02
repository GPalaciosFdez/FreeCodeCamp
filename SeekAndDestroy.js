function destroyer(arr) {
    // Remove all the values
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arguments.length; j++) {
            if (arr[i] === arguments[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);