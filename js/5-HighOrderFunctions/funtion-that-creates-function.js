function it(message, test) {console.log((test ? '\x1b[32m[√]' :'\x1b[31m[x]') + ' ' + message);}


function say(addThisText) {
    return function(text) {return text+', '+addThisText};
}

var insult = say('gilipuertas');

it('Can Insult', insult('Hola') == 'Hola, gilipuertas');



function repeat(times, action) {
    console.log('I will repeat the action '+times+' times.');
    for (var item=0; item<times; item++) {
        action(item);
    }
}


function unless(test, then) {
    if(!test)
        {
            then()
        };
}

repeat(5, function(theItem) {
    unless(theItem == 3, function() {
        console.log('Value: '+theItem);
    })

});