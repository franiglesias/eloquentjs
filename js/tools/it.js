function it(message, test) {console.log((test ? '\x1b[32m[√]' :'\x1b[31m[x]') + ' ' + message);}

if (typeof module != "undefined" && module.exports)
    module.exports = it;
