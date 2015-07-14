function unite(arr1, arr2, arr3) {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            if (arr.indexOf(arguments[i][j]) === -1) {
                arr.push(arguments[i][j]);
            }
        }
    }
    return arr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);