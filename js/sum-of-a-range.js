function it(message, test) {console.log((test ? '\x1b[32m[√]' :'\x1b[31m[x]') + ' ' + message);}

function arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr2.every(function(element, index) {
        return element == arr2[index];
    });
}


function range(from, to, step) {

    function endNotReached(current, to, step) {

        return sign(step) * (to - current) >= 0;
    }

    function sign(number) {
        return number/Math.abs(number);
    }

    if (from === to) {
        return [from];
    }

    step = typeof step !== 'undefined' ? step : sign(to-from);

    var aRange = [];
    var counter = from;
    while (endNotReached(counter, to, step)) {
        aRange.push(counter);
        counter += step;
    }
    return aRange;
}

function sum(arr) {
    var acum = 0;
    for(var index = 0; index < arr.length; index++) {
        acum += arr[index];
    }
    return acum;
}

it('generates a range from 1 to 1', arrayEquals(range(1, 1), [1]));
it('generates a range from 1 to 3', arrayEquals(range(1, 3), [1, 2, 3]));
it('generates a range from 1 to 10', arrayEquals(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
it('generates stepped ranges', arrayEquals(range(1, 10, 2), [1, 3, 5, 7, 9]));
it('generates downward ranges', arrayEquals(range(5, 2, -1), [5,4,3,2]));
it('generates downward ranges if from is greater than to', arrayEquals(range(5, 2), [5,4,3,2]));

it('sums an array with 1 element', sum([1]) === 1);
it('sums an array with 2 elements', sum([3, 5]) === 8);
it('sums an array with any elements', sum([3, 5, 15, 12, 24]) === 59);

it('sum 1..10 should be 55', sum(range(1, 10)) === 55);
it('sum 10..1 should be 55', sum(range(10, 1)) === 55);