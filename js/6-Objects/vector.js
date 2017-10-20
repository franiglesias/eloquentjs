var Vector = function(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.add = function (vector) {
    return new Vector(vector.x + this.x,vector.y + this.y);
};

Vector.prototype.substract = function (vector) {
    return new Vector(this.x - vector.x, this.y - vector.y)
}

if (typeof module != "undefined" && module.exports)
    module.exports = Vector;
