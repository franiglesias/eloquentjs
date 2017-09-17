function minimum(x, y) {
    if (x < y) {
        return x;
    }
    return y;
}


if (minimum(3, 5) == 3) {
    console.log ('OK');
} else {
    console.log('Error');
}
if (minimum(7, 3) == 3) {
    console.log ('OK');
} else {
    console.log('Error');
}
if (minimum(5, 5) == 5) {
    console.log('OK');
} else {
    console.log('Error');
}