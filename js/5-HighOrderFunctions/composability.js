var ANCESTRY_FILE = require('./data/ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

var it = require('../tools/it.js');
var deepEqual = require('../tools/deepequal.js');
var round = require('../tools/round.js');

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

function age(p) {
    return p.died - p.born;
}

function male(p) {
    return p.sex == "m"
}

function female(p) {
    return p.sex == "f";
}



var average_male = average(ancestry.filter(male).map(age));
var average_female = average(ancestry.filter(female).map(age));

it('Rounds number to 1 decimal', 36.7 === round(36.666666667, 1));

it ('Computes average age of males', 61.67 === round(average_male, 2));

it ('Computes average age of females', 54.56 === round(average_female, 2));

