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


function reverseArray(arr) {
    var newArr = [];
    arr.forEach(function(element) {
        newArr.unshift(element);
    })
    return newArr;
}

function reverseArrayInPlace(arr) {
    if (arr.length == 1) {return arr;}
    var element = arr.shift();
    if(arr.length > 2) {
        reverseArrayInPlace(arr);
    }
    arr.push(element);
}


it('reverses an array immutable', arrayEquals(reverseArray([1]), [1]));
it('reverses an array immutable', arrayEquals(reverseArray([1,2]), [2,1]));
it('reverses an array immutable', arrayEquals(reverseArray([1,2,3]), [3,2,1]));

var arr = [1];
reverseArrayInPlace(arr);
it('reverses array 1 elem', arrayEquals(arr, [1]));

var arr = [1, 2];
reverseArrayInPlace(arr);
it('reverses array 2 elem', arrayEquals(arr, [2, 1]));

var arr = [1, 2, 3];
reverseArrayInPlace(arr);
it('reverses array 3 elem', arrayEquals(arr, [3, 2, 1]));
var arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
it('reverses array 5 elem', arrayEquals(arr, [5, 4, 3, 2, 1]));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseArrayInPlace(arr);
it('reverses array 10 elem', arrayEquals(arr, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

