function sortNumbers(inputArr) {
    let arrToPrint = [];
    inputArr.sort((a, b) => a - b);
    const divideByTwo = inputArr.length % 2;
    if (divideByTwo === 0) {
        for (let i = 0; i < inputArr.length / 2; i++) {
            arrToPrint.push(inputArr[i]);
            arrToPrint.push(inputArr[inputArr.length - (i + 1)]);
        }
    }
    else {
        for (let i = 0; i < inputArr.length / 2; i++) {
            if ((inputArr.length / 2) - i === 0.5) {
                arrToPrint.push(inputArr[i]);
            }
            else {
                arrToPrint.push(inputArr[i]);
                arrToPrint.push(inputArr[inputArr.length - (i + 1)]);
            }
        }
    }
    return arrToPrint;
}

// example input:
sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);