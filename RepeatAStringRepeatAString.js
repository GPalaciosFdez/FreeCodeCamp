function repeat(str, num) {
    // repeat after me
    if (num <= 0) {
        return "";
    } else {
        var s = "";
        for (var i = 1; i <= num; i++) {
            s = s + str;
        }
        return s;
    }
}

repeat('abc', 3);