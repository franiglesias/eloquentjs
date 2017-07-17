function repeatCharacter(theChar, times) {
    return theChar.repeat(times);
}
/**
 * Created by frankie on 17/7/17.
 */

function createATriangle(height, theCharacter) {

    height = typeof height !== 'undefined' ? height : 5;
    theCharacter = typeof theCharacter !== 'undefined' ? theCharacter : '$';

    var theTriangle = '';
    for (row = 0; row < height; row++) {
        theTriangle += repeatCharacter(theCharacter, row + 1) + "\n";
    }
    return theTriangle;
}