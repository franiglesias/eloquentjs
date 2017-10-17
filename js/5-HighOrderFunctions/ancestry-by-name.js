var Lineage = require('./Lineage/lineage.js');
var ANCESTRY_FILE = require('./data/ancestry');
var ancestry = JSON.parse(ANCESTRY_FILE);

l = new Lineage(ancestry);
console.log(l.averageAgeDiffWithMother());
console.log(l.averageAgeByCentury());

