function multiplier(factor) {
    return function (number) {
        return number * factor;
    }
}

var twice = multiplier(2);

var triple = multiplier(3);

console.log(twice(5));
console.log(triple(5));

