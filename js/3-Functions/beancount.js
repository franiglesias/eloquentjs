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

function it(message, test) {
    var result;
    if (test) {
        result = '[√]';
    } else {
        result = '[x]';
    }
    console.log(result + ' ' + message);
}

it('Counts 2 B in Abracadabra', countBs('ABRACADABRA') == 2);
it('Counts 5 A in Abracadabra', countsChar('ABRACADABRA', 'A') == 5);