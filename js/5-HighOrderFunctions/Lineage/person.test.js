var it = require('../../tools/it.js');
var Person = require('./person');

p = new Person({
    name: 'Fran Iglesias',
    sex: 'male',
    born: 1968,
    died: 2017,
    mother: '',
    father: ''
});

it('Computes age', p.age() === 49);
it('Computes century', p.century() === 21);