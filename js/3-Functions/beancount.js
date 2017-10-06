var it = require('../tools/it.js');


function countBs(text) {
    return countsChar(text, 'B');
}

function countsChar(text, char) {
    var counter = 0;
    for (var position = 0; position < text.length; position++) {
        if (text[position] == char) {
            counter++;
        }
    }
    return counter;
}


it('Counts 2 B in Abracadabra', countBs('ABRACADABRA') == 2);
it('Counts 5 A in Abracadabra', countsChar('ABRACADABRA', 'A') == 5);