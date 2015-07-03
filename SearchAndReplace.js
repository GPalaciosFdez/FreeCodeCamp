function replace(str, before, after) {
    position = str.indexOf(before);
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.substring(1);
    }
    str = str.substring(0, position) + after + str.substring(position + before.length);
    return str;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");