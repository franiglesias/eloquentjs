/**
 * Created by frankie on 17/7/17.
 */

function checkered(size) {
    var check = false;
    var result = "";
    for (var row = 0; row < size; row++) {
        for(var column = 0; column < size; column++) {
            result += (check ? '#' : ' ');
            check = !check;
        }
        result += "\n";
        check = !check;
    }
    return result;
}

console.log(checkered(12));