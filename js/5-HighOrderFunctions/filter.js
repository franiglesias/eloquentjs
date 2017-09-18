var ANCESTRY_FILE = require('./data/ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

var it = require('../tools/it.js');
var deepEqual = require('../tools/deepequal.js');

// test function

function test(person) {
    return person.born > 1900 && person.born < 1925;
}

// How filtering works

function filter(array, test) {
    var passed = [];

    for(var i = 0; i < array.length; i++) {
        if(test(array[i])) {
            passed.push(array[i]);
        }
    }

    return passed;
}

var external = filter(ancestry, test);

var internal = ancestry.filter(test);

it('Two methods are equivalent', deepEqual(internal, external));
