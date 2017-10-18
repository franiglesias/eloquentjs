var it = require('../tools/it');
var Vector = require('./vector');


var vector = new Vector(5, 1);

it('Is initialized with coordinates', vector instanceof Vector);

var vector = new Vector(3, 2);
it('Can compute length', vector.length() === Math.sqrt(13));

var vector = new Vector(3, 6);
it('Can compute length', vector.length() === Math.sqrt(45));