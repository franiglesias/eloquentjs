var Vector = function(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

if (typeof module != "undefined" && module.exports)
    module.exports = Vector;
