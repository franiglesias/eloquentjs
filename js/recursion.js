function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power (base, exponent - 1);
}


for (var exponent = 0; exponent < 17; exponent++) {
    console.log ('2 ^', exponent, ' = ',  power(2, exponent));
}