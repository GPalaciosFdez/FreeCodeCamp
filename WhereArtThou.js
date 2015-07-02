function where(collection, source) {
    var arr = [];
    // What's in a name?
    for (var i in collection) {
        if (collection[i].last === source.last) {
            arr.push(collection[i]);
        }
    }
    return arr;
}

where([{
    first: 'Romeo',
    last: 'Montague'
}, {
    first: 'Mercutio',
    last: null
}, {
    first: 'Tybalt',
    last: 'Capulet'
}], {
    last: 'Capulet'
});