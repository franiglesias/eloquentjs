function isEven(number) {
    number = Math.abs(number);
    if (number > 1) {
        return isEven(number - 2);
    }
    return (number === 0);
}


if (isEven(50)) {
    console.log ('OK');
} else {
    console.log('Error');
}

if (!isEven(75)) {
    console.log('OK');
} else {
    console.log('Error');
}

if (!isEven(-1)) {
    console.log('OK');
} else {
    console.log('Error');
}

if (isEven(-2)) {
    console.log('OK');
} else {
    console.log('Error');
}