function chunk(arr, size) {
    // Break it up.
    arr_final = [];
    len = arr.length;
    var i = 0;
    while (i < len / size) {
        arr_final.push(arr.slice(0, size));
        arr = arr.slice(size);
        i++;
    }
    return arr_final;
}

chunk(['a', 'b', 'c', 'd'], 2);