var ANCESTRY_FILE = require('./data/ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

var it = require('../tools/it.js');
var deepEqual = require('../tools/deepequal.js');


function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++) {
        current = combine(current, array[i]);
    }
    return current;
}

function earliest(min, cur) {
    if (cur.born < min.born) return cur;
    return min;
}

var altReduced = reduce(ancestry, earliest, ancestry[0]);
var reduced = ancestry.reduce(earliest);

var expected = {
    name: 'Pauwels van Haverbeke',
    sex: 'm',
    born: 1535,
    died: 1582,
    father: 'N. van Haverbeke',
    mother: null
};

it('Finds earliest birth date', deepEqual(expected, altReduced));
it('Finds earliest birth date', deepEqual(expected, reduced));
