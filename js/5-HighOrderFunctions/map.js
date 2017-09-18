var ANCESTRY_FILE = require('./data/ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

var it = require('../tools/it.js');
var deepEqual = require('../tools/deepequal.js');


function filter(person) {
    return person.died-person.born > 90;
}

function transform(person) {
    return person.name;
}

function map(array, transform) {
    var mapped = [];
    for (var i=0; i<array.length; i++) {
        mapped.push(transform(array[i]));
    }
    return mapped;
}

var filtered = ancestry.filter(filter);

var expected = [ 'Clara Aernoudts', 'Emile Haverbeke', 'Maria Haverbeke' ];

it('Maps with map',  deepEqual(expected, map(filtered, transform)));
it('Maps with array.map',  deepEqual(expected, filtered.map(transform)));
it('Same result',  deepEqual(map(filtered, transform), filtered.map(transform)));

