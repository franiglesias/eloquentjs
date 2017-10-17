function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus, 0) / array.length;
}

if (typeof module != "undefined" && module.exports)
    module.exports = average;
