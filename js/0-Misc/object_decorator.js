function it(message, test) {console.log((test ? '\x1b[32m[√]' :'\x1b[31m[x]') + ' ' + message);}


var person = {
    name: 'Fran',
    surname: 'Iglesias',
    getComplete: function () {
        return this.name + ' ' + this.surname;
    }
}

var treatment ={
    treatment: 'Mr',
    getComplete: function(person) {
        return this.treatment + ' ' + person.getComplete();
    },
}



it('Can return name with treatment', treatment.getComplete(person) == 'Mr Fran Iglesias');