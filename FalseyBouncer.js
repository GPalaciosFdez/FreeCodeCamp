function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    arr = arr.filter(function (falsey) {
        if (Boolean(falsey)) {
            return true;
        } else {
            return false;
        }
    });
    return arr;
}

bouncer([7, 'ate', '', false, 9]);