var rabbit = {};

rabbit.speak = function(line) {
    console.log("The rabbit says: '"+ line +"'");
}

rabbit.speak("I'm alive");

function speak(line) {
    console.log("The " +this.type +" rabbit says: ** " + line + " ** ");
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("It's late");
fatRabbit.speak("It's time to eat some carrots");

speak.apply(whiteRabbit, ["The Queen's gonna axe my head"]);
speak.call(fatRabbit, "A good carrot is a good carrot");


var basicRabbit = {
    speak: function (line) {
        console.log("The " +this.type +" rabbit says: ** " + line + " ** ");
    }
}


var killerRabbit = Object.create(basicRabbit);

killerRabbit.type = 'Killer';
killerRabbit.speak('SKREEEEE!');

function Rabbit(type) {
    this.type = type;
}

var blackRabbit = new Rabbit('black');

Rabbit.prototype.speak = function(line) {
    console.log("The " +this.type +" rabbit says: ** " + line + " ** ");
}

blackRabbit.speak('Whasssa');