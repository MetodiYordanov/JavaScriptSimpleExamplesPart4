function oddAndEvenSum(inputNum) {
    const inputAsStringArr = inputNum.toString().split('');
    const inputAsArr = inputAsStringArr.map(Number);
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < inputAsArr.length; i++) {
        if (inputAsArr[i] % 2 === 0) {
            sumEven += inputAsArr[i];
        }
        else {
            sumOdd += inputAsArr[i];
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

// example input:
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);