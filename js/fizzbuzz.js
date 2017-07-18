/**
 * Created by frankie on 17/7/17.
 */

function decideWhatToSay(number) {

    if (number % 15 === 0) {
        return 'FizzBuzz';
    }
    if (number % 3 === 0) {
        return 'Fizz';
    } else
    if (number % 5 === 0) {
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
