function round(number, decimals) {
    var factor = Math.pow(10, decimals);
    return Math.round(number * factor) / factor;
}

if (typeof module != "undefined" && module.exports)
    module.exports = round;
