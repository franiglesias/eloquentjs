function findSolution(target) {
    function targetWasReached(start) {
        return start == target;
    }

    function targetWasExceded(start) {
        return start > target;
    }

    function addFive(number) {
        return number + 5;
    }

    function multiplyThree(number) {
        return number * 3;
    }

    function updateHistoryAddFive(history) {

        return "(" + history + " + 5)";
    }

    function updateHistoryMultiplyThree(history) {

        return "(" + history + " * 3)";
    }

    function find(start, history) {
        if (targetWasReached(start)) {
            return history;
        } else if (targetWasExceded(start)) {
            return null;
        } else return find(addFive(start), updateHistoryAddFive(history)) || find(multiplyThree(start), updateHistoryMultiplyThree(history));
    }

    return find(1, "1");
}


if ("(((((((1 + 5) + 5) * 3) + 5) * 3) + 5) + 5)" == findSolution(124)) {
    console.log('OK');

} else {
    console.log('Wrong!');
}

console.log(findSolution(124));