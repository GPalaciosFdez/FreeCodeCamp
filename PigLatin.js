function translate(str) {
    if (/[aeiou]/ig.test(str.charAt(0))) {
        return str + "way";
    } else {
        var i = 0;
        while (/[^aeiou]/ig.test(str.charAt(i))) {
            i += 1;
        }
        return str = str.substring(i) + str.substring(0, i) + "ay";
    }
}

translate("consonant");