/**
 * Created by frankie on 17/7/17.
 */

function isDivisible(number, by) {
    return (number % by === 0);
}

function decideWhatToSay(number) {

    if (isDivisible(number, 15)) {
        return 'FizzBuzz';
    }
    if (isDivisible(number, 3)) {
        return 'Fizz';
    }
    if (isDivisible(number, 5)) {
        return 'Buzz';
    }
    return number.toString();
}

function fizzBuzzList(maxLen) {
    var theList = '';

    maxLen = typeof maxLen !== 'undefined' ? maxLen : 30;

    for (var item = 1; item <= maxLen; item++) {
        theList += decideWhatToSay(item) + "\n";
    }

    return theList;
}

console.log(fizzBuzzList(30));