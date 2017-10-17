var Person = function (data) {
    this.name = data.name;
    this.sex = data.sex;
    this.born = data.born;
    this.died = data.died;
    this.father = data.father;
    this.mother = data.mother;
}

Person.prototype.ageDiffWith = function (anotherPerson) {
    return this.born - anotherPerson.born;
}

Person.prototype.age = function() {
    return this.died - this.born;
}

Person.prototype.century = function() {
    return Math.ceil(this.died/100);
}

if (typeof module != "undefined" && module.exports)
    module.exports = Person;
