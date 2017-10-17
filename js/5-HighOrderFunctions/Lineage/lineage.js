
var average = require('../../tools/average');
var Person = require('./person');

var Lineage = function (data) {
    this.people = [];
    this.byName = {};
    data.forEach(function (personData) {
        person = new Person(personData);
        this.people.push(person);
        this.byName[person.name] = person;
    }.bind(this));
}

Lineage.prototype.averageAgeDiffWithMother = function () {
    var isDefined = function(element) {
        return element !== undefined;
    }
    var diffs = this.people.map(function (person) {
        var mother = this.findByName(person.mother);
        if(isDefined(mother)) {
            return person.ageDiffWith(mother);
        }
    }.bind(this));
    return average(diffs.filter(isDefined));
}

Lineage.prototype.findByName = function (personName) {
    if (this.byName[personName] !== undefined) {
        return this.byName[personName];
    }
}

Lineage.prototype.averageAgeByCentury = function () {
    var data = {};
    this.people.forEach(function(person) {
        var group = person.century();
        var age = person.age();
        if (data[group] === undefined) {
            data[group] = [];
        }
        data[group].push(age);
    });
    var groups = Object.keys(data);
    var averages = {};
    groups.forEach(function(group) {
        averages[group] = average(data[group]);
    });
    return averages;
}

if (typeof module != "undefined" && module.exports)
    module.exports = Lineage;
