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

it('Two nulls are equal', deepEqual(null, null));
it('Null with a value are different', !deepEqual(null, 4));
it('Two equal numeric values are equal', deepEqual(5, 5));
it('Two different numeric values are equal', !deepEqual(5, 8));
it('Two objects without properties are equal', deepEqual({}, {}));
it('Object and scalar are different', !deepEqual({left:1}, 2));
it('Two objects with different number of properties are not equal', !deepEqual({left: 1}, {right: 1, another: 3}));
it('Two objects with the same properties and values are equal', deepEqual({prop: 1}, {prop: 1}));
it('Two objects with the same properties but different values are different', !deepEqual({prop: 1}, {prop: 3}));

var object1 = {
    prop: 1,
    prop2: {
        subprop: 1
    }
};

var object2 = {
    prop: 1,
    prop2: {
        subprop: 1
    }
};

var object3 = {
    prop: 1,
    prop2: {
        subprop: 3
    }
};

it('Two objects with the same properties and values, and some properties are objects, are equal', deepEqual(object1, object2));

it('Two objects with the same properties and values, and some properties are objects with different values, are different', !deepEqual(object1, object3));