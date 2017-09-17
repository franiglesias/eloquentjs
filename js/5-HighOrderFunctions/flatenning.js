var original = [
    ['This', 'is'],
    ['a', 'test'],
    ['for', 'array', 'programming']
];


var expected = ['This', 'is', 'a', 'test', 'for', 'array', 'programming'];


function flatten(anArray) {
    return anArray.reduce(function(item, flattened) {
        return item.concat(flattened);
    }, []);
}

console.log(flatten(original));

it('Flattens the array', deepEqual(expected, flatten(original)));



function it(message, test) {console.log((test ? '\x1b[32m[√]' :'\x1b[31m[x]') + ' ' + message);}

function deepEqual(left, right) {

    if (bothAreObjects(left, right)) {
        return deepEqualObjects(left, right);
    }
    return left === right;

    function bothAreObjects(left, right) {
        return strictTypeOf(left) == "object" && strictTypeOf(right) == "object";
    }

    function deepEqualObjects(left, right) {

        if(objectsHaveDifferentLength()) {
            return false;
        }

        for(propertyName in left) {
            if (typeof left[propertyName] === 'object') {
                return deepEqual(left[propertyName], right[propertyName]);
            }
            if (objectsDifferOnPropertyValue()) {
                return false;
            }
        }
        return true;

        function objectsDifferOnPropertyValue() {
            return right[propertyName] != left[propertyName];
        }

        function objectsHaveDifferentLength() {
            return left.length != right.length;
        }
    }

    function strictTypeOf(aThing) {
        if (aThing == null) {
            return null;
        }
        return typeof aThing;
    }


};