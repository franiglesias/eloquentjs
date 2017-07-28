function hasProperty(object, property) {
    return property in object;
}

var myObject = {
    myProperty: 19,
    otherProperty: 'theName'

}

function it(message, test) {console.log((test ? '[√]' :'[x]') + ' ' + message);}

it('Can say if property exists in object', hasProperty(myObject, 'myProperty'));
it('Can say if property does not exist in object', !hasProperty(myObject, 'random'));
it('Can say myObject is an object', typeof (myObject) == "object");