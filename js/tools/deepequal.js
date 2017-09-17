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

if (typeof module != "undefined" && module.exports)
    module.exports = deepEqual;
