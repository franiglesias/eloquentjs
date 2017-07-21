
var landscape = function () {
    var flat = function (size) {
        for (var count = 0; count < size; count++) {
            result += '_';
        }
    }

    var mountain = function (size) {
        result += "/";
        for (var count = 0; count < size; count++) {
            result += "¨";
        }
        result += "\\";
    }
    var result = '';

    flat(2);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
}

