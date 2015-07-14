function convert(str) {
    // &colon;&rpar;
    for (var i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
        case "&":
            str = str.substring(0, i) + "&amp;" + str.substring(i + 1);
            break;

        case "<":
            str = str.substring(0, i) + "&#" + 60 + str.substring(i + 1);
            break;

        case ">":
            str = str.substring(0, i) + "&#" + 62 + str.substring(i + 1);
            break;

        case '"':
            str = str.substring(0, i) + "&#" + 34 + str.substring(i + 1);
            break;

        case "'":
            str = str.substring(0, i) + "&#" + 39 + str.substring(i + 1);
            break;
        }
    }
    return str;
}

convert('Dolce & Gabbana');