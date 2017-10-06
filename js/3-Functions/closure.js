var it = require('../tools/it.js');

function multiplier(factor) {
    return function (number) {
        return number * factor;
    }
}

var twice = multiplier(2);
var triple = multiplier(3);

it('Multiplies by 2', 10 === twice(5));
it('Multiplies by 3', 15 === triple(5));
