function printArrayElements(inputArr, step) {
    let arrToReturn = [];
    for (let i = 0; i < inputArr.length; i += step) {
        arrToReturn.push(inputArr[i]);
    }
    return arrToReturn;
}

// example input:
printArrayElements(['5', '20', '31', '4', '2'], 2);
printArrayElements(['dsa', 'asd', 'test', 'tset'], 2);
printArrayElements(['1', '2', '3', '4', '5'], 6);