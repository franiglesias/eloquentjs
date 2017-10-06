var it = require('../tools/it.js');


function minimum(x, y) {
    if (x < y) {
        return x;
    }
    return y;
}


it('3 is the minimun in 3,5', 3 == minimum(3,5));
it('3 is the minimun in 7,3', 3 == minimum(7,3));
it('Equal numbers', 5 == minimum(5,5));