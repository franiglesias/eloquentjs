var it = require('../tools/it');
var Vector = require('./vector');


var vector = new Vector(5, 1);

it('Is initialized with coordinates', vector instanceof Vector);



var vector = new Vector(3, 2);
it('Can compute length', vector.length() === Math.sqrt(13));

var vector = new Vector(3, 6);
it('Can compute length', vector.length() === Math.sqrt(45));

var vector = new Vector (2, 2);
var summed = vector.add(new Vector(3,6));

it('Sum returns a vector', summed instanceof Vector);
it('Can immutably sum a vector', summed.x === 5);
it('Can immutably sum a vector', summed.y === 8);

var vector = new Vector (2, 3);
var summed = vector.add(new Vector(4,5));

it('Can immutably sum a vector', summed.x === 6);
it('Can immutably sum a vector', summed.y === 8);

var vector = new Vector (2, 3);
var summed = vector.add(new Vector(-4,-5));

it('Can immutably sum a vector', summed.x === -2);
it('Can immutably sum a vector', summed.y === -2);


var vector = new Vector (2, 3);
var summed = vector.substract(new Vector(4,5));

it('Can immutably substract a vector', summed.x === -2);
it('Can immutably substract a vector', summed.y === -2);