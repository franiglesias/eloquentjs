function it(message, test) {console.log((test ? '\x1b[32m[√]' :'\x1b[31m[x]') + ' ' + message);}

function arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr2.every(function(element, index) {
        return element == arr2[index];
    });
}

function arrayToList(values) {
    var list = null;
    while(values.length > 0) {
        list = {
            value: values.pop(),
            next: list
        };
    }
    return list;

}


function listToArray(list) {
    var current = list;
    var result = [];
    do {
        result.push(current.value);
        current = current.next;
    } while(current != null);

    return result;
}

function listNth(aList, position) {
    var current = 1;
    while(current < position) {
        if(aList.next == null) {
            return;
        }
            aList = aList.next;
            current++;
    }
    return aList.value;
}

var aList = arrayToList([1]);
it('Creates a list from array with 1 value', aList.value == 1 && aList.next == null);

var aList = arrayToList([1, 2]);
it('Creates a list from array with 2 values', (aList.value == 1) && (aList.next.value == 2) && aList.next.next == null);

var aList = arrayToList([1, 2, 3]);
it('Creates a list from array with 3 values', (aList.value == 1) && (aList.next.value == 2) && aList.next.next.value == 3);

aList = {value: 1, next: null};
it('Creates an array from a 1 member list', arrayEquals(listToArray(aList),[1]));

aList = {value: 1, next: {value: 2, next: null}};
it('Creates an array from a 2 members list', arrayEquals(listToArray(aList),[1, 2]));

aList = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
it('Creates an array from a 3 members list', arrayEquals(listToArray(aList),[1, 2, 3]));


aList = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
it('Can return the 1st element value', listNth(aList, 1) == 1);

aList = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
it('Can return the 2nd element value', listNth(aList, 2) == 2);

aList = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
it('Can return the 3rd element value', listNth(aList, 3) == 3);

aList = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
it('Returns undefined if not  found', typeof listNth(aList, 5) == 'undefined');